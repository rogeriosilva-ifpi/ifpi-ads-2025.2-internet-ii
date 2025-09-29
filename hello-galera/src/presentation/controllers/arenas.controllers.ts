import { Request, Response } from "express";
import { v7 as uuid } from "uuid"; // ULID
import { ArenasService } from "../../application/ArenasService";
import { GetAllArenasQuery } from "../../application/get-all-arenas.query";

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

  public findById = async (req: Request, res: Response) => {
    // Exemplo de uso de Parâmetro de Rota (Path Param)
    // No Insomnia: GET http://localhost:3000/01993676-512d-723f-a609-8ddf6f849e4b
    // Usei id com formato UUID, essa sequencia alphanumérico é o id gerado para cada Arena

    const arena = getArenaByID(req.params.id);
    if (arena) {
      return res.json(arena);
    }

    return res.status(404).json({ detail: "Arena não localizada." });
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
