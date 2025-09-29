import {Router} from 'express'
import { container } from 'tsyringe'
import { ArenaController } from '../arena.controller'

const router = Router()

const controler = container.resolve(ArenaController)

router.get('/arenas2', controler.allArenas)

export { router as arenas_router }