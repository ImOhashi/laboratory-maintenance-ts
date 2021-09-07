import { Types } from "mongoose";

import ExamRepository from "../repositories/examRepository";
import { IExamServices, Exam, statusExam } from "../interfaces";

class ExamServices implements IExamServices {
  private examRepository: ExamRepository = new ExamRepository();

  async register(exam: Exam): Promise<Exam> {
    return this.examRepository.create({
      name: exam.name,
      type: exam.type,
      status: statusExam.active,
      laboratory: exam.laboratory
    });
  }

  async getAllActives(): Promise<Exam[]> {
    return this.examRepository.getActives();
  }

  async get(id: string): Promise<Exam> {
    return this.examRepository.get(new Types.ObjectId(id));
  }

  async update(id: string, exam: Exam): Promise<Exam> {
    return this.examRepository.update(new Types.ObjectId(id), {
      name: exam.name,
      type: exam.type,
      status: statusExam.active,
      laboratory: exam.laboratory
    });
  }

  async deleteActive(id: string): Promise<Exam> {
    return this.examRepository.deleteActive(new Types.ObjectId(id));
  }
}

export default new ExamServices();
