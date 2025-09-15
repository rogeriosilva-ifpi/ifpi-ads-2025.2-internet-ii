import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { HTTPException } from "./HTTPException";

export const validate = (schema: z.ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      // if (error instanceof ZodError) {
      //   res.status(400).json({ error: error.issues });
      // }

      // res.status(400).json({ detail: "Não possivel processar" });

      throw new HTTPException(404, "Não foi possível processar");
    }
  };
};
