import { Types } from "mongoose";

import LaboratoryRepository from "../repositories/laboratoryRepository";
import { ILaboratoryServices, Laboratory, status } from "../interfaces";

class LaboratoryServices implements ILaboratoryServices {
  private laboratoryRepository: LaboratoryRepository =
    new LaboratoryRepository();

  async register(laboratory: Laboratory): Promise<Laboratory> {
    return this.laboratoryRepository.create({
      name: laboratory.name,
      address: laboratory.address,
      status: status.active,
    });
  }

  async getAllActives(): Promise<Laboratory[]> {
    return this.laboratoryRepository.getActives();
  }

  async get(id: string): Promise<Laboratory> {
    return this.laboratoryRepository.get(new Types.ObjectId(id));
  }

  async update(id: string, laboratory: Laboratory): Promise<Laboratory> {
    return this.laboratoryRepository.update(new Types.ObjectId(id), {
      name: laboratory.name,
      address: laboratory.address,
      status: laboratory.status,
    });
  }

  async deleteActive(id: string): Promise<Laboratory> {
    return this.laboratoryRepository.deleteActive(new Types.ObjectId(id));
  }
}

export default new LaboratoryServices();
