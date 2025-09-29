import { Router } from "express";
import { ArenasService } from "../../application/ArenasService";
import { ArenasController } from "../controllers/arenas.controllers";

export const arena_router = Router();
const arenaController = new ArenasController(new ArenasService());

arena_router.get("/", arenaController.getAll);
arena_router.get("/two", arenaController.getAll2);
arena_router.get("/:id", arenaController.findById);
arena_router.post("/", arenaController.createOne);
