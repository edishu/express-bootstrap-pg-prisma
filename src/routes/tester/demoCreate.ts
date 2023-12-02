import { prisma } from "../../prismaClient";
import { RequestHandler } from "express";

export const demoCreate: RequestHandler = async (req, res) => {
  try {
    const data = req.body as {
      name: string;
      email: string;
    };
    await prisma.user.create({
      data,
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    res.send(allUsers);
  } catch (e) {
    console.log(`[DB Error]: ${e}`);
    res.sendStatus(500);
  }
};
