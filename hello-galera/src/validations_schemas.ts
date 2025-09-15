import { z } from "zod";

export const novaArenaSchema = z.object({
  nome: z.string().min(3),
  zona: z.enum(["Norte", "Leste", "Sul", "Sudeste", "Centro"]),
});
