import { v7 as uuid } from "uuid"; // ULID
import { NotFoundException } from "./exceptions/NotFoundException";

export class GetArenaById {
  constructor() {}

  public execute(id: number) {
    if (id > 100) {
      // throw new NotFoundHTTPException(`Não há uma arena com id = (${id})`);
      throw new NotFoundException(`Não há uma arena com id = (${id})`);
    }

    const arena = { id: uuid(), nome: "THE Beach", zona: "Leste" };
    return arena;
  }
}
