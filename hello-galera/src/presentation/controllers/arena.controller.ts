import { Request, Response } from "express";
import {  injectable } from "tsyringe";
import { GetAllArenasService } from "../../application/get-arenas.service";
import { EntityNotFoundException } from "../../application/exception/EntityNotFoundException";

@injectable()
export class ArenaController{

    constructor(
        private allArenaService: GetAllArenasService
    ){}

    public allArenas = async (req: Request, res: Response) => {
        return res.status(200).json(this.allArenaService.execute())
    }

    public getArenaById = async (req: Request, res: Response) => {

        const id = Number(req.params.id)
        
        if (id === 10){
            return res.status(200).json(this.allArenaService.execute())
        }
        
        throw new EntityNotFoundException(`Arena não localizada para o id = ${id} `)
        
    }

}