import { Router } from "express";
import { v7 as uuid } from "uuid"; // ULID

export const arena_router = Router();

// Schemas, Modelos de API, ViewModels
interface Arena {
  id: string;
  nome: string;
  endereco?: string;
  geolocalizacao?: string;
  zona: string;
}

// Lista de Arenas
const arenas: Array<Arena> = [];
arenas.push({ id: uuid(), nome: "THE Beach", zona: "Leste" });
arenas.push({ id: uuid(), nome: "Arena Ypê", zona: "Norte" });

arena_router.get("/", (req, res) => {
  // Exemplo de filtro por parâmetros de Query String
  // No Insomnia: GET http://localhost:3000/arenas?zona=Leste
  // No Insomnia: GET http://localhost:3000/arenas
  const { zona } = req.query;
  if (zona) {
    const arenas_filtradas = arenas.filter((arena) => arena.zona == zona);
    res.status(200).json(arenas_filtradas);
  }

  return res.status(200).json(arenas);
});

arena_router.get("/:id", (req, res) => {
  // Exemplo de uso de Parâmetro de Rota (Path Param)
  // No Insomnia: GET http://localhost:3000/01993676-512d-723f-a609-8ddf6f849e4b
  // Usei id com formato UUID, essa sequencia alphanumérico é o id gerado para cada Arena

  const arena = getArenaByID(req.params.id);
  if (arena) {
    return res.json(arena);
  }

  return res.status(404).json({ detail: "Arena não localizada." });
});

arena_router.post("/", (request, response) => {
  const { nome, zona } = request.body;
  const arena = {
    id: uuid(),
    nome,
    zona,
  };

  arenas.push(arena);

  return response.status(201).json(arena);
});

// Utils
function getArenaByID(id: string): Arena | undefined {
  const index = arenas.findIndex((arena) => arena.id == id);

  if (index != -1) {
    return arenas.at(index);
  }
  return;
}
