import { Document } from "mongoose";

export interface Laboratory {
  name: String;
  address: String;
  status: String;
}

export interface LaboratoryDocument extends Laboratory, Document {}
