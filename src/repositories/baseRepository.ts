import { Model, Schema } from "mongoose";

export class BaseRepository {
  private model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async get(id: String | Schema.Types.ObjectId): Promise<any> {
    return this.model.findById(id);
  }
  async getAll(): Promise<any> {
    return this.model.find();
  }
  async create(model: any): Promise<any> {
    return this.model.create(model);
  }
  async update(id: String | Schema.Types.ObjectId, model: any): Promise<any> {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: model },
      { new: true, returnOriginal: false }
    );
  }
  async delete(id: String | Schema.Types.ObjectId): Promise<any> {
    return this.model.findOneAndDelete({ _id: id });
  }
}
