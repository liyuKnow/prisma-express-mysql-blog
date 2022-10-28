import express from "express";
import { register } from "../controllers/authController.js";
// import { login, register, logout } from "../controllers/authController.js";

const router = express.Router();

// router.post("/login", login);

router.post("/register", register);

// router.post("/logout", logout);

export default router;
