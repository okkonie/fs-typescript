import patients from "../../data/patients.ts";
import type { NoSsnPatient } from "../types.ts";

export const getAll = (): NoSsnPatient[] => {
  return patients.map(({ ssn, ...patient }) => patient);
};
