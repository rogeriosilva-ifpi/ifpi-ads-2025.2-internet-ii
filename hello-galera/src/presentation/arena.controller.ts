import { Request, Response } from "express";
import { GetAllArenasService } from "../application/get-arenas.service";
import {  inject, injectable } from "tsyringe";

@injectable()
export class ArenaController{

    constructor(
        private allArenaService: GetAllArenasService){}

    public allArenas = async (req: Request, res: Response) => {
        return res.status(200).json(this.allArenaService.execute())
    }

}