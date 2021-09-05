import { Schema } from "mongoose";

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
  
  async update(
    id: String | Schema.Types.ObjectId,
    laboratory: Laboratory
  ): Promise<Laboratory> {
    return this.laboratoryRepository.update(id, {
      name: laboratory.name,
      address: laboratory.address,
      status: status.active,
    });
  }

  async deleteActive(id: String | Schema.Types.ObjectId): Promise<Laboratory> {
    return this.laboratoryRepository.deleteActive(id);
  }
}

export default new LaboratoryServices();
