import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log("Hello World!");
  //   create data into DB
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title two",
  //       content: "This is content",
  //       authorName: "John Doe",
  //     },
  //   });

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is title 1",
        content: "This is content 1",
        authorName: "John  1",
      },
      {
        title: "This is title 2",
        content: "This is content 2",
        authorName: "John Doe 2",
      },
      {
        title: "This is title 3",
        content: "This is content 3",
        authorName: "John Doe 3",
      },
      {
        title: "This is title 4",
        content: "This is content 4",
        authorName: "John Doe 4",
      },
      {
        title: "This is title 5",
        content: "This is content 5",
        authorName: "John Doe 5",
      },
      {
        title: "This is title 6",
        content: "This is content 6",
        authorName: "John Doe 6",
      },
      {
        title: "This is title 7",
        content: "This is content 8",
        authorName: "John Doe 8",
      },
      {
        title: "This is title 9",
        content: "This is content 9",
        authorName: "John Doe 9",
      },
      {
        title: "This is title 10",
        content: "This is content 10",
        authorName: "John Doe 10",
      },
      {
        title: "This is title 11",
        content: "This is content 11",
        authorName: "John Doe 11",
      },
      {
        title: "This is title 12",
        content: "This is content 12",
        authorName: "John Doe 12",
      },
      {
        title: "This is title 13",
        content: "This is content 13",
        authorName: "John Doe 13",
      },
      {
        title: "This is title 14",
        content: "This is content 14",
        authorName: "John Doe 14",
      },
      {
        title: "This is title 15",
        content: "This is content 15",
        authorName: "John Doe 15"
      },
      {
        title: "This is title 16",
        content: "This is content 16",
        authorName: "John Doe 16",
      },
      {
        title: "This is title 17",
        content: "This is content 17",
        authorName: "John Doe 17",
      },
      {
        title: "This is title 18",
        content: "This is content 18",
        authorName: "John Doe 18",
      },
      {
        title: "This is title 19",
        content: "This is content 19",
        authorName: "John Doe 19",
      },
      {
        title: "This is title 20",
        content: "This is content 20",
        authorName: "John Doe 20",
      },
      {
        title: "This is title 21",
        content: "This is content 21",
        authorName: "John Doe 21",
      },
      {
        title: "This is title 22",
        content: "This is content 22",
        authorName: "John Doe 22",
      },
      {
        title: "This is title 23",
        content: "This is content 23",
        authorName: "John Doe 23",
      },
    ],
  });

  console.log(createMany);
};

main();
