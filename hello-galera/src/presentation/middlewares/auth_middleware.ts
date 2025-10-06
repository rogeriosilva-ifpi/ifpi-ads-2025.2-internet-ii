import { NextFunction, Request, Response } from "express";
import { HTTPException } from "../exceptions/HTTPException";

export const auth_middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    const detail = "Acesso negado. Sem crachá.";
    // return res.status(401).json({ detail });
    throw new HTTPException(detail, 401);
  }

  if (authorization !== "123456") {
    const detail = "Acesso negado. Crachá inválido.";
    return res.status(401).json({ detail });
  }

  next();
};
