import { NextFunction, Request, Response } from "express";
import { DomainException } from "../../application/exceptions/DomainException";
import { NotFoundException } from "../../application/exceptions/NotFoundException";
import { HTTPException } from "../exceptions/HTTPException";

export function translate_exception_middleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof DomainException) {
    if (error instanceof NotFoundException) {
      const exception = new HTTPException(error.message, 404);
      next(exception);
    }
  }

  next(error);
}
