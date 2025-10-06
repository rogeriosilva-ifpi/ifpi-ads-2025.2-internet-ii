import {Router} from 'express'
import { container } from 'tsyringe'
import { ArenaController } from '../controllers/arena.controller'


const router = Router()

const controler = container.resolve(ArenaController)

router.get('/', controler.allArenas)
router.get('/:id', controler.getArenaById)

export { router as arenas_router }