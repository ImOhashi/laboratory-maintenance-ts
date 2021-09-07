import { Schema } from "mongoose";

import { Exam } from ".";

export interface IExamServices {
  register(exam: Exam): Promise<Exam>;

  getAllActives(): Promise<Exam[]>;

  update(
    id: String | Schema.Types.ObjectId,
    exam: Exam
  ): Promise<Exam>;

  deleteActive(id: String | Schema.Types.ObjectId): Promise<Exam>;
}
