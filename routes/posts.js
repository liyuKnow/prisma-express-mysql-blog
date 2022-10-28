import express from "express";
import { addPost, deletePost, getFeed, getPost, postViews, publishPost } from "../controllers/postsController.js";

const router = express.Router();

router.post("/", addPost);

router.get(`/:id`, getPost)

router.delete(`/:id`, deletePost);

router.put("/:id/views", postViews);

router.put("/publish/:id", publishPost);

router.get("/feed", getFeed);

export default router;
