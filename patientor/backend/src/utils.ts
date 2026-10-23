import { type NewPatient, newPatientSchema } from "./types.ts";

export const parsePatient = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};

/* 
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseString = (text: unknown, name: string): string => {
  if (!text || !isString(text)) {
    throw new Error(`Incorrect or missing data at ${name}`);
  }
  return text;
};

const parseGender = (text: unknown): Gender => {
  if (text !== "male" && text !== "female" && text !== "other") {
    throw new Error("Incorrect or missing gender");
  }
  return text;
};

export const parsePatient = (object: unknown): Patient => {
  if (!object || typeof object !== "object") {
    throw new Error("Missing or invalid patient data");
  }

  if (
    "id" in object &&
    "name" in object &&
    "dateOfBirth" in object &&
    "gender" in object &&
    "occupation" in object &&
    "ssn" in object
  ) {
    const newPatient: Patient = {
      id: parseString(object.id, "id"),
      name: parseString(object.name, "name"),
      dateOfBirth: parseString(object.dateOfBirth, "dateOfBirth"),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, "occupation"),
      ssn: parseString(object.ssn, "ssn"),
    };

    return newPatient;
  }

  throw new Error("Incorrect data: some fields are missing");
};
*/
