import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("Hello World!");

  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title two",
  //       content: "This is content",
  //       authorName: "John Doe",
  //     },
  //   });

  //   console.log(result);

  const getAllFromDB = await prisma.post.findMany();

  console.log(getAllFromDB);
};

main();
