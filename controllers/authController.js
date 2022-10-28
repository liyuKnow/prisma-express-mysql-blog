import prisma from "../database/index.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, posts } = req.body;

  const postData = posts
    ? posts.map((post) => {
      return { title: post.title, content: post.content || undefined };
    })
    : [];

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData,
      },
    },
  });
  res.json(result);
};
