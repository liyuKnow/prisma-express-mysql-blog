import express from "express";

import cors from "cors";
// import cookieParser from "cookie-parser";
// import multer from "multer";

import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

// CREATE APP
const app = express();

// MIDDLEWAREs
app.use(cors());
app.use(express.json());
// app.use(cookieParser());

// ROUTES
app.use("/api/auth/", authRoutes);
app.use("/api/posts/", postRoutes);
app.use("/api/users/", userRoutes);


const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
