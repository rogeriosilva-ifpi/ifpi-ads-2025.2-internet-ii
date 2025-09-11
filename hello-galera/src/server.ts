import express from "express";
import "reflect-metadata";
import { v7 as uuid } from "uuid";

const app = express();

app.use(express.json());

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

// EndPoints
app.get("/arenas", (req, res) => {
  // Exemplo de filtro por parâmetros de Query String
  // No Insomnia: GET http://localhost:3000/arenas?zona=Leste
  const { zona } = req.query;
  if (zona) {
    const arenas_filtradas = arenas.filter((arena) => arena.zona == zona);
    res.status(200).json(arenas_filtradas);
  }

  return res.status(200).json(arenas);
});

app.get("/arenas/:id", (req, res) => {
  // Exemplo de uso de Parâmetro de Rota (Path Param)
  // No Insomnia: GET http://localhost:3000/01993676-512d-723f-a609-8ddf6f849e4b
  const arena = getArenaByID(req.params.id);
  if (arena) {
    return res.json(arena);
  }

  return res.status(404).json({ detail: "Arena não localizada." });
});

app.post("/arenas", (request, response) => {
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

// Endpoints de Exemplos
app.get("/hello/:id", (req, res) => {
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const query = "Received a request at Query (name) ->" + req.query.name + "\n";
  const params = "Received a request at Params (id)->" + req.params.id + "\n";

  res.status(200).json({ headers, query, params });
});

app.post("/hello", (req, res) => {
  const { horario } = req.body as { horario: string };
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const body = "Received a POST request at body id ->" + horario;

  res.status(201).json({ headers, body });
});

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
