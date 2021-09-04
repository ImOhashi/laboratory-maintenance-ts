import { ObjectId } from "mongoose";

export interface IBaseRepository {
  get(id: ObjectId | String): Promise<any>;
  getAll(): Promise<any>;
  create(model: any): Promise<any>;
  update(id: ObjectId | String, model: any): Promise<any>;
  delete(id: ObjectId | String): Promise<any>;
}
