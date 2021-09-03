import { connect } from "mongoose";

import { DatabaseError } from "../errors";
import { Logger } from "../utils";

class Connect {
  public connect(): void {
    connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        dbName: process.env.MONGO_COLLECTION,
        auth: {
          username: process.env.MONGO_USER,
          password: process.env.MONGO_PASS,
        },
      },
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          Logger.info("Database is connected");
        }
      }
    );
  }
}

export default new Connect();
