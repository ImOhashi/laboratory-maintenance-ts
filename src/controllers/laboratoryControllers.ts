import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { LaboratoryServiceError } from "../errors";

import laboratoryServices from "../services/laboratoryServices";

class LaboratoryControllers {
  async register(req: Request, res: Response) {
    try {
      const newLaboratory = await laboratoryServices.register({
        ...req.body,
      });

      return res.status(StatusCodes.CREATED).json(newLaboratory);
    } catch (err) {
      throw new LaboratoryServiceError(
        `Unable to register the data entered.\n${err}`
      );
    }
  }
}

export default new LaboratoryControllers();
