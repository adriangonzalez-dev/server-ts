import express, { Application } from 'express';
import cors from 'cors';
import userRouter from '../router/example.router';

class Server {
    public app: Application;
    private port: number = 3000;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes() {
        this.app.use('/user', userRouter);
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

export default Server;