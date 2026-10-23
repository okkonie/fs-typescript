import { z } from "zod";

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export const genderSchema = z.enum(["male", "female", "other"]);

export type Gender = z.infer<typeof genderSchema>;

export const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string(),
  gender: genderSchema,
  occupation: z.string(),
  ssn: z.string(),
});

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NewPatient = Omit<Patient, "id">;
export type NoSsnPatient = Omit<Patient, "ssn">;
