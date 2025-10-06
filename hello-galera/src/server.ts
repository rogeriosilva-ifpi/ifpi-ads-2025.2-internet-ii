import express from "express";
import "reflect-metadata";
import './infrastructure/ioc'
import { routes } from "./presentation/routes";
import { global_error_middleware } from "./presentation/middlewares/global_error_middleware";


const app = express();

app.use(express.json());


const middle = (req, res, next) => {
  console.log("Hii.. MIB");
  next();
};

// Router
app.use(routes)

const my_middleware = (req, res, next) => {
  console.log('Query Params: ', JSON.stringify(req.query))
  console.log('Path Params: ', JSON.stringify(req.params))
  console.log('Body Data: ', JSON.stringify(req.body) )
  next()
}

app.use(my_middleware)

// Global Error
app.use(global_error_middleware);

// Iniciar Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
