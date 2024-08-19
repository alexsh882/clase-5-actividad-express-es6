import { definitionOfRelationships } from "../models/relations.js";
import { sequelize } from "./connection.js";

export async function connect() {
    try {
        // TODO: podría agregar seeders.
        definitionOfRelationships();
        
        await sequelize.sync({ force: true });
        
        return await sequelize.authenticate();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}