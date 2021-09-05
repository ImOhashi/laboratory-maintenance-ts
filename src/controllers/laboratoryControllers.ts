import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { badRequest, ok, notFound } from "../utils";

import { LaboratoryServiceError } from "../errors";

import laboratoryServices from "../services/laboratoryServices";

class LaboratoryControllers {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      const { name, address } = req.body;

      if (!name || !address) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json(badRequest(new LaboratoryServiceError("Invalid request body")));
      } else {
        const newLaboratory = await laboratoryServices.register({
          ...req.body,
        });

        return res.status(StatusCodes.CREATED).json(ok(newLaboratory));
      }
    } catch (err) {
      throw new LaboratoryServiceError(`Error generating record.\n${err}`);
    }
  }

  async getAllActives(req: Request, res: Response): Promise<Response> {
    try {
      return res
        .status(StatusCodes.OK)
        .json(ok(await laboratoryServices.getAllActives()));
    } catch (err) {
      throw new LaboratoryServiceError(`Error trying to query data.\n${err}`);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, address, status } = req.body;

      if (!id) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json(notFound(new LaboratoryServiceError(`Id not informed.`)));
      }

      if (name || address || status) {
        const newLaboratory = await laboratoryServices.update(id, {
          ...req.body,
        });

        return res.status(StatusCodes.CREATED).json(ok(newLaboratory));
      }
    } catch (err) {
      throw new LaboratoryServiceError(`Error trying to updated data.\n${err}`);
    }
  }
}

export default new LaboratoryControllers();
