import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { badRequest, ok, notFound, created, notAcceptable } from "../utils";
import { LaboratoryServiceError } from "../errors";
import laboratoryServices from "../services/laboratoryServices";
import { status } from "../interfaces";

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

        return res.status(StatusCodes.CREATED).json(created(newLaboratory));
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

        return res.status(StatusCodes.CREATED).json(created(newLaboratory));
      }
    } catch (err) {
      throw new LaboratoryServiceError(`Error trying to updated data.\n${err}`);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (!id) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json(notFound(new LaboratoryServiceError(`Id not informed.`)));
      }

      const laboratory = await laboratoryServices.get(id);

      if (laboratory && laboratory.status == status.active) {
        const deletedLab = await laboratoryServices.deleteActive(id);

        return res.status(StatusCodes.OK).json(ok(deletedLab));
      }

      return res
        .status(StatusCodes.NOT_ACCEPTABLE)
        .json(notAcceptable("Content not found or inactive status"));
    } catch (err) {
      throw new LaboratoryServiceError(`Error trying to deleted data.\n${err}`);
    }
  }
}

export default new LaboratoryControllers();
