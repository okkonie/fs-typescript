import express from "express";
import { getNoSsnPatients, addPatient } from "../services/patients.ts";
import { parsePatient } from "../utils.ts";
import { z } from "zod";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getNoSsnPatients());
});

router.post("/", (req, res) => {
  try {
    const patient = parsePatient(req.body);
    const addedPatient = addPatient(patient);
    res.json(addedPatient);
  } catch (e) {
    if (e instanceof z.ZodError) res.status(400).send({ error: e.issues });
    else res.status(400).send({ error: "unknown error" });
  }
});

export default router;
