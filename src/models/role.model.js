import { sequelize } from "../database/connection.js";
import { DataTypes } from "sequelize";

export const Role = sequelize.define('Role', {
    role_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'roles',
    paranoid: true,
    timestamps: true
});