import { Document } from "mongoose";
import { Laboratory } from ".";

export enum status {
  active = "ativo",
  inactive = "inativo",
}

export enum type {
  clinicalAnalysis = "análise clínica",
  image = "imagem",
}

export interface Exam {
  name: String;
  type: type;
  status: status;
  laboratory: Laboratory[];
}

export interface ExamDocument extends Exam, Document {}
