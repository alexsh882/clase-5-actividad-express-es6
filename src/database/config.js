import { definitionOfRelationships } from "../models/relations.js";
import { sequelize } from "./connection.js";

export async function connect() {
    try {
        
        definitionOfRelationships();
        
        await sequelize.sync({ force: true });
        
        return await sequelize.authenticate();
    } catch (error) {
        throw new Error(error);
    }
}