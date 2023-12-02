import { prisma } from "../../prismaClient";
import { RequestHandler } from "express";

export const demoCreate: RequestHandler = async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        posts: {
          create: { title: "Hello World" },
        },
        profile: {
          create: { bio: "I like turtles" },
        },
      },
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
