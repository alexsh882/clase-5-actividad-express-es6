import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { ROLES } from "../const/roles.js";
import { Role } from "./role.model.js";

export const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: Role.primaryKeyAttribute,
      },
    },
  },
  {
    // Other model options go here
    tableName: "users",
    paranoid: true,
    timestamps: true,
   
  }
);
