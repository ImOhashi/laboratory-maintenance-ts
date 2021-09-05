import { Router } from "express";

import laboratoryControllers from "../controllers/laboratoryControllers";

class LaboratoryRoutes {
  public router: Router = Router();

  constructor() {
    this.setRoutes();
  }

  private setRoutes() {
    this.router
      .post("/", laboratoryControllers.register)
      .get("/", laboratoryControllers.getAllActives);
  }
}

export default new LaboratoryRoutes().router;
