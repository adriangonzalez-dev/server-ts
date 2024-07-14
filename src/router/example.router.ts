import { UsersController } from '../controller/example.controller';
import { RouterBase } from "./router";

export class UserRouter extends RouterBase<UsersController>{
    protected setupRoutes(): void {
        this.router.get('/', (req,res)=> this.controller.getUsers(req, res))
        this.router.get('/:id', (req, res)=> this.controller.getUsersById(req, res))
    }
}

const router = new UserRouter(new UsersController()).getRouter()

export default router