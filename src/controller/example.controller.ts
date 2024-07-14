import { Request, Response } from "express";
import { UserService } from "../services/example.service";
import { SQLServerConnection } from "../config/db.config";

export class UsersController {
    private userService: UserService;
    constructor(){
        this.userService = new UserService(
            new SQLServerConnection()
        );
    }

    async getUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json({
                success: true,
                data: users,
                message: "Users retrieved successfully",
                error: null
            });
        } catch (error:any) {
            res.status(500).json({
                success: true,
                data: null,
                message: "Error to get users",
                error: error.message
            });
        }

    }

    async getUsersById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const users = await this.userService.getUserById(+id);
            res.status(200).json({
                success: true,
                data: users,
                message: "Users retrieved successfully",
                error: null
            });
        } catch (error:any) {
            res.status(500).json({
                success: true,
                data: null,
                message: "Error to get users",
                error: error.message
            });
        }

    }
}