import { Schema } from "mongoose";

import { Laboratory } from ".";

export interface ILaboratoryServices {
  register(laboratory: Laboratory): Promise<Laboratory>;
  getAllActives(): Promise<Laboratory[]>;
  update(
    id: String | Schema.Types.ObjectId,
    laboratory: Laboratory
  ): Promise<Laboratory>;
  deleteActive(id: String | Schema.Types.ObjectId): Promise<Laboratory>;
}
