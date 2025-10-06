import { NextFunction, Request, Response } from "express";
import { HTTPException } from "../exceptions/HTTPException";

export function global_error_middleware(
  error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof HTTPException) {
    const detail = error.message;
    res.status(error.statusCode).json({ detail });
  }

  const detail = `${error.message} --> Tá tudo bem.`;
  return res.status(200).json({ detail });
}
