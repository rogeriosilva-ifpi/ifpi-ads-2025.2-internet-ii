import { Request, Response, Router } from "express";

export const partidas_router = Router();

interface NovaParticipacao {
  user_id: number;
}

interface NovaParticipacaoParams {
  id: number;
}

partidas_router.post(
  "/:id/participacao",
  (
    req: Request<NovaParticipacaoParams, {}, NovaParticipacao>,
    res: Response
  ) => {
    const { user_id } = req.body;
    const partida_id = req.params.id;

    const result = {
      partida: partida_id,
      user_id: user_id,
      descricao: "Patro Bet # 09",
    };

    if (user_id % 2 != 0) {
      res.status(404).json({ detail: "Usuário inexistente" });
    }

    res.status(201).json(result);
  }
);
