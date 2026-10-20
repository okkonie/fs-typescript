import express from "express";
import { getAll } from "../services/patients.ts";
const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getAll());
});

export default router;
