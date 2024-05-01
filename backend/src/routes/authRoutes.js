import Router from "express";
import { signupController } from "../controllers/userController.js";

const route = Router();

route.post("/signup",signupController);
route.post("/login",);

export default route;
