import { Router } from "express";

export class RouterBase<T>{
    protected router:Router
    protected controller:T

    constructor(controller:T){
        this.router = Router()
        this.controller = controller;
        this.setupRoutes()
    }

    protected setupRoutes():void{}
    
    public getRouter():Router{
        return this.router;
    }
}