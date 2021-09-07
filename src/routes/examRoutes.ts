import { Router } from "express";

import examControllers from "../controllers/examControllers";

class ExamRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  private setRoutes() {
    this.router
      .post("/", examControllers.register)
      .get("/", examControllers.getAllActives)
      .put("/:id", examControllers.update)
      .delete("/:id", examControllers.delete);
  }
}

export default new ExamRoutes().router;
