import { NextFunction, Request, Response } from "express";

export const log_middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const mensagem = "Olá, tudo bem?!";
  console.log(`LOG: METHOD: ${req.method} PATH: ${req.path}`);
  // res.status(200).json({ mensagem });
  next();
};
