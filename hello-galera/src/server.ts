import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import { routes } from "./presentation/routes";

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

// Adicionar Roteadores
app.use(routes);

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
