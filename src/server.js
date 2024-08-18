
import cors from 'cors';
import morgan from "morgan";

import ConfigService from './config/config.service.js'
import helmet from "helmet";

class Server {
    constructor(httpServer) {
        
        const config = new ConfigService();

        this.app = httpServer;
        this.port = config.getAppPort();

    }

    middlewares() { 
        this.httpServer.use(morgan('dev'));
        this.httpServer.use(helmet());
        this.httpServer.use(cors());

    }


    start() {
        this.app.listen(this.port,
            () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }

}

export default Server;