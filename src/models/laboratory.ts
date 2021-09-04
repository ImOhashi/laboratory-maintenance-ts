import { model, Model, Schema } from "mongoose";
import { LaboratoryDocument } from "../interfaces";

const LaboratorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const LaboratoryModel: Model<LaboratoryDocument> = model(
  "LaboratoryModel",
  LaboratorySchema
);

export default LaboratoryModel;
