import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";
import { HTTPException } from "./HTTPException";

export const validate = (schema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (error) {

      if (error instanceof ZodError) {
        return res.status(400).json({message: error.issues})
      }

      throw new HTTPException(400, "Não foi possível processar");
    }
  };
};
