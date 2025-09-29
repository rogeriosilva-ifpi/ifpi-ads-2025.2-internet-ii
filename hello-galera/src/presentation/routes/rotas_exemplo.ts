import { Request, Response, Router } from "express";
import { partidas_router } from "./rotas_partidas";

export const exemplo_router = Router();

// Endpoints de Exemplos
exemplo_router.get("/hello/:id", (req, res) => {
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const query = "Received a request at Query (name) ->" + req.query.name + "\n";
  const params = "Received a request at Params (id)->" + req.params.id + "\n";

  res.status(200).json({ headers, query, params });
});

exemplo_router.post("/hello", (req, res) => {
  const { horario } = req.body as { horario: string };
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const body = "Received a POST request at body id ->" + horario;

  res.status(201).json({ headers, body });
});

// EndPoints
function novoUsuario(request: Request, response: Response) {
  // Faço o trabalho. obtenho os dado do REQUEST
  //...
  return response.status(200).json({ mensagem: "Tudo ok" });
}

exemplo_router.post("/usuarios", novoUsuario);

// Incluir as Rotas de Partidas
exemplo_router.use("/partidas", partidas_router);
