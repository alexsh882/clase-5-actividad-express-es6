import { Role } from "../../models/role.model.js";
import { ROLES } from "../../const/roles.js";

export const roles = [
    {
        name: ROLES.ADMIN
    },
    {
        name: ROLES.SELLER
    },
    {
        name: ROLES.USER
    }
];

export const seedRoles = async () => {
    
    await Role.bulkCreate(roles);
};