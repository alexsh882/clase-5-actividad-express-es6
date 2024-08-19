import { User } from './user.model.js';
import { Product } from './product.model.js';
import { Purchase } from './purchase.model.js';
import { ProductPurchase } from './product-purchase.model.js';
import { Role } from './role.model.js';

export const definitionOfRelationships = () => {
    // un usuario tiene un rol
    User.belongsTo(Role, {
        foreignKey: 'role_id',
        as: 'user_role'
    });

    // un usuario puede tener muchos productos
    User.hasMany(Product, {
        foreignKey: 'seller_id',
        as: 'products'
    })

    // un rol puede tener muchos usuarios
    Role.hasMany(User, {
        foreignKey: 'role_id',
        as: 'users'
    });

    // un producto puede tener muchas compras
    Product.belongsToMany(Purchase, {
        through: ProductPurchase,
        foreignKey: 'product_id',
        otherKey: 'purchase_id',
        as: 'purchases'
    });

    // un producto pertenece a un usuario vendedor
    Product.belongsTo(User, {
        foreignKey: 'seller_id',
        as: 'seller'
    });

    // una compra puede tener muchos productos 
    Purchase.belongsToMany(Product, {
        through: ProductPurchase,
        foreignKey: 'purchase_id',
        otherKey: 'product_id',
        as: 'products'
    });

    // una compra pertenece a un usuario comprador
    Purchase.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    // un producto comprado pertenece a un producto
    ProductPurchase.belongsTo(Product, {
        foreignKey: 'product_id',
        as: 'product'
    });

    // una producto comprado pertenece a una compra
    ProductPurchase.belongsTo(Purchase, {
        foreignKey: 'purchase_id',
        as: 'purchase'
    });
};