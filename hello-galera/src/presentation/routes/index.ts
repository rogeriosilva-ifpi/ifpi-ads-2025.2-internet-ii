import { Router } from "express";
import { arenas_router } from "./arenas.routes";
import { commum_routes } from "./example.routes";

const router = Router()

router.use(arenas_router)
router.use(commum_routes)

export {router as routes}