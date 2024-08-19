import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';
import { ROLES } from '../const/roles.js';

export class AuthService {

    #userModel;

    constructor(User) {
        this.#userModel = User;
    }

    async signUp({ names, username, password }) {

        const userFounded = await this.#userModel.findOne({
            where: { username: user.username }
        });

        if (userFounded) {
            throw new Error('El usuario ya existe');
        }

        const newUser = this.#userModel.create({
            names,
            username,
            password: bcrypt.hashSync(password, 8),
            role: ROLES.USER
        });

        delete newUser.password;

        const token = await this.#createToken(newUser);

        return { newUser, token };
    }

    async signIn({ username, password }) {
        const userFounded = await this.#userModel.findOne({
            where: { username }
        });

        if (!userFounded) {
            throw new Error('Usuario o contraseña incorrecta');
        }

        const isPasswordValid = bcrypt.compareSync(password, userFounded.password);

        if (!isPasswordValid) {
            throw new Error('Usuario o contraseña incorrecta');
        }

        const token = await this.#createToken(userFounded);

        return { userFounded, token };
    }


    async #createToken(user) {
        return new Promise((resolve, reject) => {
            jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, {
                expiresIn: 86400 // 24 horas
            }, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    }
}

export const authService = new AuthService(User);