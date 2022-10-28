import express from "express";
import { addPost, deletePost, getFeed, getPost, postViews, publishPost } from "../controllers/postsController.js";

const router = express.Router();

router.post("/", addPost);

router.get(`/post/:id`, getPost)

router.delete(`/post/:id`, deletePost);

router.put("/post/:id/views", postViews);

router.put("/publish/:id", publishPost);

router.get("/feed", getFeed);

export default router;
