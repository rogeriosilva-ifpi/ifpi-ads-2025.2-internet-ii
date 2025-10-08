import { NextFunction, Request, Response } from "express"
import { BusinessValidationException } from "../../application/exception/BusinessValidationException"
import { EntityNotFoundException } from "../../application/exception/EntityNotFoundException"
import { HTTPException } from "../../HTTPException"
import { DomainException } from "../../application/exception/DomainException"

export const global_error_middleware = (error: Error, req: Request, res: Response, next: NextFunction) => {

  let statusCode = 500
  let detail = 'Error interno. Tentar mais tarde!'

  if (error instanceof EntityNotFoundException){
    statusCode = 404
    detail = error.message
  }else if (error instanceof BusinessValidationException){
    statusCode = 404
    detail = error.message
  }else if (error instanceof HTTPException) {
    statusCode = error.statusCode
    detail = error.message
  }else if (error instanceof DomainException){
    statusCode = 400
    detail = error.message
  }

  return res.status(statusCode).json({detail})
}