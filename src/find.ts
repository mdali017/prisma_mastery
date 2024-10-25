import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  //   find First
  //   const findFirst = await prisma.post.findFirst({
  //     where: {
  //     //   id: 1,
  //     //   id: 2,
  //     // published: false
  //     published: true
  //     },
  //   });

  //   find first or throw error
  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       //   id: 1,
  //       //   id: 2,
  //       // published: false
  //       published: true,
  //     },
  //   });

  // find unique
  //   const findUnique = await prisma.post.findUnique({
  //     where: {
  //       id: 4,
  //     // published: true
  //     },
  //   });

//     find unique or throw error
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 4,
      // published: true
    },
  });

  console.log({ findUnique });
};

main();
