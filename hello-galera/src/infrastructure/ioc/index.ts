import {container} from 'tsyringe'
import { ArenaRepository } from '../../application/repositories/arena.repository'
import { RSArenaRepository } from '../../persistence/rs-arena.repository'
import { ArenaRepositoryToken } from '../../application/inject-tokens'


container.registerSingleton<ArenaRepository>(ArenaRepositoryToken, RSArenaRepository)