import express from "express";
import "reflect-metadata";
import { global_error_middleware } from "./presentation/middlewares/global_error_exception";
import { log_middleware } from "./presentation/middlewares/log_middleware";
import { translate_exception_middleware } from "./presentation/middlewares/translate_exceptions.middleware";
import { routes } from "./presentation/routes";

const app = express();

app.use(express.json());

// Middleware
app.use(log_middleware);
// app.use(auth_middleware);

// Adicionar Roteadores
app.use(routes);

app.use(translate_exception_middleware);
app.use(global_error_middleware);

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
