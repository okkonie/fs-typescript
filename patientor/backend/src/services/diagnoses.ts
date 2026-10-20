import diagnoses from "../../data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

export const getAll = (): Diagnosis[] => {
  return diagnoses;
};
