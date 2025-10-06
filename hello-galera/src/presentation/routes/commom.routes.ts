import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});

export {router as commom_routes}

