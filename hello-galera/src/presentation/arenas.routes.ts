import {Router} from 'express'
import { ArenaController } from './arena.controller'
import { container } from 'tsyringe'
import { GetAllArenasService } from '../application/get-arenas.service'

const router = Router()

const controler = container.resolve(ArenaController)

router.get('/arenas2', controler.allArenas)

export { router as areanas_router }