import { Types } from "mongoose";

import { Exam, statusExam } from "../interfaces";
import ExamModel from "../models/exam";
import { BaseRepository } from "./baseRepository";

export default class ExamRepository extends BaseRepository {
  constructor() {
    super(ExamModel);
  }

  async getActives(): Promise<Exam[]> {
    return ExamModel.find({
      status: statusExam.active,
    });
  }

  async deleteActive(id: Types.ObjectId): Promise<Exam> {
    return ExamModel.findByIdAndDelete(
      {
        _id: id,
        status: statusExam.active,
      },
      { returnOriginal: true }
    );
  }
}
