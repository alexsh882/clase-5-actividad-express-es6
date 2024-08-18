import { sequelize } from "./connection.js";

export async function connect() {
    try {
        // TODO: relaciones o algún seed

        await sequelize.sync({ force: true });

        return await sequelize.authenticate();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}