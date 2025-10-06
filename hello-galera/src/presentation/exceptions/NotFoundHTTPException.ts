import { HTTPException } from "./HTTPException";

export class NotFoundHTTPException extends HTTPException {
  constructor(public message: string) {
    super(message, 404);
  }
}
