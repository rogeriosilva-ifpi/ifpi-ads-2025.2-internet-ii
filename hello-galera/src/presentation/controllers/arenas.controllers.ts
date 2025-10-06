import { Request, Response } from "express";
import { v7 as uuid } from "uuid"; // ULID
import { ArenasService } from "../../application/ArenasService";
import { GetAllArenasQuery } from "../../application/get-all-arenas.query";
import { GetArenaById } from "../../application/get_arena_by_id";
import { HTTPException } from "../exceptions/HTTPException";

export class ArenasController {
  constructor(private arenaService: ArenasService) {}

  public getAll = async (req: Request, res: Response) => {
    const { zona } = req.query;
    const arenas = this.arenaService.getAllArenasQuery(zona);
    return res.status(200).json(arenas);
  };

  public getAll2 = async (req: Request, res: Response) => {
    const { zona } = req.query;
    const arenas = new GetAllArenasQuery().execute();
    return res.status(200).json(arenas);
  };

  public getAll3 = async (req: Request, res: Response) => {
    const { zona } = req.query;

    throw new HTTPException("Tá tudo ok, amigo.", 400);

    const arenas = new GetAllArenasQuery().execute();
    return res.status(200).json(arenas);
  };

  public findById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const service = new GetArenaById();

    return res.status(200).json(service.execute(id));
  };

  public createOne = async (request: Request, response: Response) => {
    const { nome, zona } = request.body;
    const arena = {
      id: uuid(),
      nome,
      zona,
    };

    arenas.push(arena);

    return response.status(201).json(arena);
  };
}
