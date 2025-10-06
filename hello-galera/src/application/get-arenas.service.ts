import { inject, injectable } from "tsyringe";
import { ArenaRepository } from "./repositories/arena.repository";
import { ArenaRepositoryToken } from "./inject-tokens";
import { BusinessValidationException } from "./exception/BusinessValidationException";


@injectable()
export class GetAllArenasService{

    constructor(
        @inject(ArenaRepositoryToken)
        private arenaRepository: ArenaRepository
    ){}


    public execute(){
        return this.arenaRepository.allArenas()
    }
}