import prisma from "../database/index.js";

export const addPost = async (req, res) => {
  const { title, content, authorId, isPublished } = req.body;
  const published = isPublished ? isPublished : [];
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { id: authorId } },
      published,
    },
  });
  res.json(result);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
};
