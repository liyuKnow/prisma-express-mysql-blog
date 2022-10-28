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

export const getPost = async (req, res) => {
  const { id } = req.params;

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  res.json(post);
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

export const postViews = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    res.json(post);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
};

export const publishPost = async (req, res) => {
  const { id } = req.params;

  try {
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      },
    });

    const updatedPost = await prisma.post.update({
      where: { id: Number(id) || undefined },
      data: { published: !postData.published || undefined },
    });
    res.json(updatedPost);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
};


export const getFeed = async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query;

  const or = searchString
    ? {
      OR: [
        { title: { contains: searchString } },
        { content: { contains: searchString } },
      ],
    }
    : {};

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      ...or,
    },
    include: { author: true },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: orderBy || undefined,
    },
  });

  res.json(posts);
};
