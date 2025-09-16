import { Router } from "express";

export const exemplo_rotas = Router();

// Endpoints de Exemplos
exemplo_rotas.get("/hello/:id", (req, res) => {
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const query = "Received a request at Query (name) ->" + req.query.name + "\n";
  const params = "Received a request at Params (id)->" + req.params.id + "\n";

  res.status(200).json({ headers, query, params });
});

exemplo_rotas.post("/hello", (req, res) => {
  const { horario } = req.body as { horario: string };
  const headers =
    "Received a request header ->" + req.headers["user-agent"] + "\n";
  const body = "Received a POST request at body id ->" + horario;

  res.status(201).json({ headers, body });
});
