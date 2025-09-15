export class HTTPException {
  public readonly statusCode: number;
  public readonly detail: string;

  constructor(statusCode: number, detail: string) {
    this.detail = detail;
    this.statusCode = statusCode;
  }
}
