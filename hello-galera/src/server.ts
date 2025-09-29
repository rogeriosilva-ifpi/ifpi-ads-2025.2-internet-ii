import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import './infrastructure/ioc'
import { v7 as uuid } from "uuid";
import { HTTPException } from "./HTTPException";
import { validate } from "./validation_middleware";
import { novaArenaSchema } from "./validations_schemas";
import { routes } from "./presentation/routes";


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

const middle = (req, res, next) => {
  console.log("Hii.. MIB");
  next();
};

// Router
app.use(routes)
app.use("/usuarios", middle, (req, res) => {res.json({ok:'ok'})});

const my_middleware = (req, res, next) => {
  console.log('Query Params: ', JSON.stringify(req.query))
  console.log('Path Params: ', JSON.stringify(req.params))
  console.log('Body Data: ', JSON.stringify(req.body) )
  next()
}

app.use(my_middleware)


// EndPoints
app.get("/arenas", my_middleware, (req, res) => {
  // Exemplo de filtro por parâmetros de Query String
  // No Insomnia: GET http://localhost:3000/arenas?zona=Leste
  // No Insomnia: GET http://localhost:3000/arenas
  const { zona } = req.query;
  if (zona) {
    const arenas_filtradas = arenas.filter((arena) => arena.zona == zona);
    return res.status(200).json(arenas_filtradas);
  }

  return res.status(200).json(arenas);
});

app.get("/arenas/:id", my_middleware, (req, res) => {
  // Exemplo de uso de Parâmetro de Rota (Path Param)
  // No Insomnia: GET http://localhost:3000/01993676-512d-723f-a609-8ddf6f849e4b
  // Usei id com formato UUID, essa sequencia alphanumérico é o id gerado para cada Arena

  const arena = getArenaByID(req.params.id);
  if (arena) {
    return res.json(arena);
  }

  return res.status(404).json({ detail: "Arena não localizada." });
});

app.post("/arenas", validate(novaArenaSchema), (request, response) => {
  const { nome, zona } = request.body;
  const arena = {
    id: uuid(),
    nome,
    zona,
  };

  arenas.push(arena);

  response.status(201).json(arena);
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

app.post("/hello", validate(novaArenaSchema) ,(req, res) => {
  const { horario } = req.body as { horario: string };
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const body = "Received a POST request at body id ->" + horario;

  res.status(201).json({ headers, body });
});

app.get("/error", async (req, res) => {
  // throw new HTTPException(400, 'Testando async error')
  throw new Error('Falha solta')
})

// Global Error
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HTTPException) {
    return res.status(error.statusCode).json({
      messagem: error.message,
    });
  }
  console.error(error)
  console.log('Rogério Silva')
  return res.status(500).json({ global: `Aconteceu um erro global: ${error.message}` });
});

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
