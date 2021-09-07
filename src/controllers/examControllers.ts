import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { badRequest, ok, notFound, created, notAcceptable } from "../utils";
import { ExamServiceError } from "../errors";
import examServices from "../services/examServices";
import { statusExam } from "../interfaces";

class ExamControllers {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      const { name, type } = req.body;

      if (!name || !type) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json(badRequest(new ExamServiceError("Invalid request body")));
      } else {
        const newExam = await examServices.register({ ...req.body, });
        return res.status(StatusCodes.CREATED).json(created(newExam));
      }
    } catch (err) {
      throw new ExamServiceError(`Error generating record.\n${err}`);
    }
  }

  async getAllActives(req: Request, res: Response): Promise<Response> {
    try {
      return res
        .status(StatusCodes.OK)
        .json(ok(await examServices.getAllActives()));
    } catch (err) {
      throw new ExamServiceError(`Error trying to query data.\n${err}`);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, type, status, laboratory } = req.body;

      if (!id) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json(notFound(new ExamServiceError(`Id not informed.`)));
      }

      if (name || type || status) {
        const newExam = await examServices.update(id, { ...req.body, });
        return res.status(StatusCodes.CREATED).json(created(newExam));
      }
    } catch (err) {
      throw new ExamServiceError(`Error trying to updated data.\n${err}`);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json(notFound(new ExamServiceError(`Id not informed.`)));
      }

      const exam = await examServices.get(id);

      if (exam && exam.status == statusExam.active) {
        const deletedExam = await examServices.deleteActive(id);
        return res.status(StatusCodes.OK).json(ok(deletedExam));
      }

      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json(notAcceptable("Content not found or inactive status"));
    } catch (err) {
      throw new ExamServiceError(`Error trying to deleted data.\n${err}`);
    }
  }
}

export default new ExamControllers();