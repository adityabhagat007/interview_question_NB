import Router from "express";
import { actionController, createPostController, getAllPostController } from "../controllers/postController.js";

const route = Router();

route.post("/create_post",createPostController);
route.post("/user_action",actionController);
route.post("/get_posts_by_id",getAllPostController)

export default route;
