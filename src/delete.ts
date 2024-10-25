import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //     //   id: 2,
  //       title: "This is title 2",
  //     },
  //   });

  //   const deleteMany = await prisma.post.deleteMany({
  //     where: {
  //       published: false,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({});

  // upsert data
//   const upsertData = await prisma.post.upsert({
//     where: {
//       id: 1,
//     },
//     update: {
//       title: "This is title 1",
//     },
//     create: {
//       title: "This is title 1",
//       content: "This is content 1",
//     },
//   });

    // console.log(upsertData);
};

deleteData();
