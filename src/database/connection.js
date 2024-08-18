import { Sequelize } from "sequelize";

import ConfigService from "../config/config.service.js";


const dbConfig = new ConfigService().getDBConfig();

export const sequelize = new Sequelize({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    dialect: dbConfig.DIALECT,
    database: dbConfig.DATABASE_NAME,
});

