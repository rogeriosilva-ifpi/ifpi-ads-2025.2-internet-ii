import { NextFunction, Request, Response } from "express";
import { HTTPException } from "../exceptions/HTTPException";

export const global_error_middleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof HTTPException) {
    const detail = error.message;
    return res.status(error.statusCode).json({ detail });
  }

  // if (error instanceof DomainException) {
  //   if (error instanceof NotFoundException) {
  //     return res.status(404).json({ detail: error.message });
  //   }
  //   // traducao das demais
  // }

  const detail = `${error.message} --> Tá tudo bem.`;
  return res.status(200).json({ detail });
};
