import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  return res.json({ ok: "ok" });
});
