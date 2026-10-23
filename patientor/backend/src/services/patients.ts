import patients from "../../data/patients.ts";
import type { NewPatient, Patient, NoSsnPatient } from "../types.ts";
import { v1 as uuid } from "uuid";

export const getNoSsnPatients = (): NoSsnPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const addPatient = (object: NewPatient): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    ...object,
  };

  patients.push(newPatient);
  return newPatient;
};
