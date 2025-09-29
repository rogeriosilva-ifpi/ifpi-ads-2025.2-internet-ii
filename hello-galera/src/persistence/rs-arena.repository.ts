import { injectable } from "tsyringe";
import { ArenaRepository } from "../application/repositories/arena.repository";


export class RSArenaRepository implements ArenaRepository{
    allArenas(): string[] {
        return ['Arena Garraga', 'Arena S2', 'Trio JS']
    }
}