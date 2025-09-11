import express from "express";
import "reflect-metadata";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/arenas", (req, res) => {
  return res.status(200).json({ result: "Arenas List" });
});

app.get("/arenas/:id/partidas", (req, res) => {
  const partidas = ["Patro#01", "Samia#19"];
  return res.json({ partidas });
});

app.post("/arenas", (request, response) => {
  const { nome, endereco } = request.body;
  const arena = {
    id: 6666,
    nome,
    endereco,
  };

  return response.status(201).json(arena);
});

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
