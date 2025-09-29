import { v7 as uuid } from "uuid"; // ULID

// Schemas, Modelos de API, ViewModels
interface Arena {
  id: string;
  nome: string;
  endereco?: string;
  geolocalizacao?: string;
  zona: string;
}

// Lista de Arenas
const arenas: Array<Arena> = [];
arenas.push({ id: uuid(), nome: "THE Beach", zona: "Leste" });
arenas.push({ id: uuid(), nome: "Arena Ypê", zona: "Norte" });

// Utils
function getArenaByID(id: string): Arena | undefined {
  const index = arenas.findIndex((arena) => arena.id == id);

  if (index != -1) {
    return arenas.at(index);
  }
  return;
}

export class GetAllArenasQuery {
  constructor() {}

  public execute(zona?: string): Arena[] {
    if (zona) {
      const arenas_filtradas = arenas.filter((arena) => arena.zona == zona);

      return arenas_filtradas;
    }

    return arenas;
  }
}
