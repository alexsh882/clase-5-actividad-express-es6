import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
import { ROLES } from '../const/roles.js';

export const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ROLES.USER
    }
}, {
    // Other model options go here
    tableName: 'users',
    paranoid: true,
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ['password'] }
    }
});