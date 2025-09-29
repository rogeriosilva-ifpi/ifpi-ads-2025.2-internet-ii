import { Router } from "express";
import { arena_router } from "./rotas_arenas";
import { exemplo_router } from "./rotas_exemplo";
import { partidas_router } from "./rotas_partidas";

const router = Router();

router.use("/arenas", arena_router);
router.use("/exemplos", exemplo_router);
router.use("/partidas", partidas_router);

export { router as routes };
