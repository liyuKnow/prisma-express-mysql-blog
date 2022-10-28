import prisma from "../database/index.js";

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

export const userDraftPosts = async (req, res) => {
    const { id } = req.params;

    const drafts = await prisma.user
        .findUnique({
            where: {
                id: Number(id),
            },
        })
        .posts({
            where: { published: false },
        });

    res.json(drafts);
};