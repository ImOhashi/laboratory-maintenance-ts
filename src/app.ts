import express from "express";
import { config } from "dotenv";

import database from "./database/connect";
import { morganMiddleware } from "./utils";
import router from "./routes";

class App {
  public app: express.Application = express();

  constructor() {
    config();

    database.connect();

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(morganMiddleware);
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        parameterLimit: 10000,
        limit: "50mb",
        extended: false,
      })
    );
    this.app.use(router);
  }
}

export default new App().app;
