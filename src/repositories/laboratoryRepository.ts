import { Schema } from "mongoose";

import { Laboratory, status } from "../interfaces";
import LaboratoryModel from "../models/laboratory";
import { BaseRepository } from "./baseRepository";

export default class LaboratoryRepository extends BaseRepository {
  constructor() {
    super(LaboratoryModel);
  }

  async getActives(): Promise<Laboratory[]> {
    return LaboratoryModel.find({
      status: status.active,
    });
  }

  async deleteActive(id: String | Schema.Types.ObjectId): Promise<Laboratory> {
    return LaboratoryModel.findByIdAndDelete(
      {
        _id: id,
        status: status.active,
      },
      { returnOriginal: true }
    );
  }
}
