import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 2,
  //     },
  //     data: {
  //       title: "This is title 22",
  //     //   content: "This is content 33",
  //     //   authorName: "John Doe 33",
  //     },
  //   });

  // update many
  const updateMany = await prisma.post.updateMany({
    where: {
      //   id: 2,
      title: "This is title 2",
    },
    data: {
      //   title: "updated title",
      published: true,
    },
  });

  console.log(updateMany);
};

updates();
