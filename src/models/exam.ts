import { model, Model, Schema } from "mongoose";
import { ExamDocument } from "../interfaces";
import LaboratoryModel from "./laboratory";

const ExamSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  laboratory: {
      type: [LaboratoryModel],
      required: true
  },
});

const ExamModel: Model<ExamDocument> = model(
  "ExamModel",
  ExamSchema
);

export default ExamModel;
