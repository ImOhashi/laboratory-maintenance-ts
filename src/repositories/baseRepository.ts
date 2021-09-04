import { Schema } from "mongoose";
import { IBaseRepository } from "../interfaces";

export class BaseRepository implements IBaseRepository {
    constructor() {
        
    }

    get(id: String | Schema.Types.ObjectId): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    create(model: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(id: String | Schema.Types.ObjectId, model: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: String | Schema.Types.ObjectId): Promise<any> {
        throw new Error("Method not implemented.");
    }
}