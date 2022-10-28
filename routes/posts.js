import express from "express";
import { addPost, deletePost } from "../controllers/postsController.js";

const router = express.Router();

router.post("/", addPost);

router.delete(`/post/:id`, deletePost);

export default router;
