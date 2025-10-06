import { Router } from "express";
import { arenas_router } from "./arenas.routes";
import { commom_routes } from "./commom.routes";

const router = Router()

router.use('/arenas', arenas_router)
router.use('/commom', commom_routes)

export {router as routes}