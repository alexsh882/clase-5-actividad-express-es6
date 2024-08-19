import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connection.js';
import { User } from './user.model.js';

export const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: User.primaryKeyAttribute
        }
    }
}, {
    tableName: 'products',
    paranoid: true,
    timestamps: true
});
