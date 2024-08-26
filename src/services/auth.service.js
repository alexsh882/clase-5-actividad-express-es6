import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { Role } from "../models/role.model.js";
import { ROLES } from "../const/roles.js";

export class BadRequestError extends Error {}

export class AuthService {
  #userModel;

  #roleModel;

  constructor(User, Role) {
    this.#userModel = User;
    this.#roleModel = Role;
  }

  async signUp({ names, username, password }) {
    const userFounded = await this.#userModel.findOne({
      where: { username: username },
    });

    if (userFounded) {
      throw new Error("El usuario ya existe");
    }

    const roleUser = await this.#roleModel.findOne({
      where: { name: ROLES.USER },
    });

    if (!roleUser) {
      throw new Error("El rol no existe");
    }

    const newUser = await this.#userModel.create({
      names,
      username,
      password: bcrypt.hashSync(password, 8),
      role_id: roleUser.role_id,
    });

    const user = {
      ...newUser.dataValues,
      user_role: roleUser,
      password: undefined,
      role_id: undefined,
    };

    const token = await this.#createToken(newUser);

    return { user, token };
  }

  async signIn({ username, password }) {
    const userFounded = await this.#userModel.findOne({
      where: { username },
      include: {
        model: this.#roleModel,
        as: "user_role",
      },
      attributes: { exclude: ["role_id"] },
    });

    if (!userFounded) {
      throw new BadRequestError("Usuario o contraseña incorrecta");
    }

    const isPasswordValid = bcrypt.compareSync(password, userFounded.password);

    if (!isPasswordValid) {
      throw new BadRequestError("Usuario o contraseña incorrecta");
    }

    const token = await this.#createToken(userFounded);

    const user = {
      ...userFounded.dataValues,
      password: undefined,
    };

    return { user, token };
  }

  async #createToken(user) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { user_id: user.user_id },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400, // 24 horas
        },
        (err, token) => {
          if (err) {
            reject(err);
          }
          resolve(token);
        }
      );
    });
  }

  async verifyToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          reject(err);
        }
        if (decoded.user_id) {
          const user = this.#userModel.findByPk(decoded.user_id);
          resolve(user);
        }
        reject(new Error("Token no válido o no existe"));

      });
    });
  }
}

export const authService = new AuthService(User, Role);
