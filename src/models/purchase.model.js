import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { User } from "./user.model.js";

export const Purchase = sequelize.define("Purchase", {
    purchase_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: User.primaryKeyAttribute
        }
    },

}, {
    tableName: 'purchases',
    timestamps: false,
    paranoid: true,
})
