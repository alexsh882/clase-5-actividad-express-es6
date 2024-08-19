
import express from 'express';
import cors from 'cors';
import morgan from "morgan";


import ConfigService from './config/config.service.js'
import helmet from "helmet";

import authRoutes from './routes/auth.routes.js';

class Server {

    #app;

    constructor(httpServer) {

        const config = new ConfigService();

        this.#app = httpServer;
        this.port = config.getAppPort();

        this.middlewares();
        this.routes();

    }

    middlewares() {

        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));

        this.#app.use(morgan('dev'));
        this.#app.use(helmet());
        this.#app.use(cors());

    }

    routes() {
        
        this.#app.use(authRoutes);
    }

    start() {
        this.#app.listen(this.port,
            () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }

}

export default Server;