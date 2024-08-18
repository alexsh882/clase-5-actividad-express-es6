
class ConfigService {
    #config = {};

    constructor() {
        this.#config = {
            DB: {
                PORT: process.env.DATABASE_PORT,
                HOST: process.env.DATABASE_HOST,
                USER: process.env.DATABASE_USER,
                PASSWORD: process.env.DATABASE_PASSWORD,
                DIALECT: process.env.DATABASE_DIALECT,
                DATABASE_NAME: process.env.DATABASE_NAME
            },
            APP: {
                PORT: process.env.APP_PORT,
                JWT_SECRET: process.env.JWT_SECRET
            }
        }

        // implement singleton pattern para evitar multiple instanciación
        if (typeof ConfigService.instance === "object") {
            return ConfigService.instance;
        }

        ConfigService.instance = this;

        return this;
    }
    getAppPort() {
        return this.#config.APP.PORT;
    }

    getJWTSecret() {
        return this.#config.APP.JWT_SECRET;
    }

    getDBConfig() {
        return this.#config.DB;
    }

}

export default ConfigService;