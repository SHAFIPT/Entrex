
import { Router } from "express";
import { formController } from "../../container/container";

const formRoutes = Router();

formRoutes.post("/", formController.create);
formRoutes.get("/", formController.list);

export default formRoutes;