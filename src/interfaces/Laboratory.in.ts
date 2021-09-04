import { Document } from "mongoose";

export enum status {
  active = "ativo",
  inactive = "inativo",
}

export interface Laboratory {
  name: String;
  address: String;
  status: status;
}

export interface LaboratoryDocument extends Laboratory, Document {}
