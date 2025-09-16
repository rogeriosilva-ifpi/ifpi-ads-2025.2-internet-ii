import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import { arena_router } from "./rotas_arenas";
import { exemplo_rotas } from "./rotas_exemplo";
import { partidas_router } from "./rotas_partidas";

const app = express();

app.use(express.json());

// Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Tudo OK..");

  console.log(req.query);

  const { id } = req.query;

  if (Number(id) > 10) {
    res.status(400).json({ detail: "Epa, não pode" });
  }

  next();
});

// EndPoints
function novoUsuario(request: Request, response: Response) {
  // Faço o trabalho. obtenho os dado do REQUEST
  //...
  return response.status(200).json({ mensagem: "Tudo ok" });
}
app.post("/usuarios", novoUsuario);

// Incluir as Rotas de Partidas
app.use("/partidas", partidas_router);

// Incluir as Rotas de Arena
app.use("/arenas", arena_router);

// Rotas de Exemplo
app.use(exemplo_rotas);

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
