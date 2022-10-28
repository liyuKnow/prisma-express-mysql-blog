import prisma from "../database/index.js";


export const createProfile = async (req, res) => {
    const { id } = req.params;
    const { bio } = req.body;

    const profile = await prisma.profile.create({
        data: {
            bio,
            user: {
                connect: {
                    id: Number(id),
                },
            },
        },
    });

    res.send(profile);
};