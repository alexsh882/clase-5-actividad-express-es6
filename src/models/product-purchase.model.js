import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

import { Product } from "./product.model.js";
import { Purchase } from "./purchase.model.js";

export const ProductPurchase = sequelize.define("ProductPurchase", {
    product_purchase_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: Product.primaryKeyAttribute,
        },
    },
    purchase_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Purchase,
            key: Purchase.primaryKeyAttribute,
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'product_purchase',
    timestamps: false,
    paranoid: true,
});