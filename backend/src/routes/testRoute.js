import {  Router } from "express";
import { testController } from "../controllers/testController.js";

const route = Router();

route.get("/",testController)

export default route;