import express from "express";
import { createProfile } from "../controllers/profilesController.js";

const router = express.Router();

router.post("/user/:id/profile", createProfile);

export default router;