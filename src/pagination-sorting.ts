import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  console.log("Pagination and Sorting");

  //   offset pagination
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2
  //   });

  //   console.log(offsetData);

  // cursor pagination
//   const cursorData = await prisma.post.findMany({
//     skip: 5,
//     take: 2,
//     cursor: {
//       id: 15,
//     },
//   });

//   console.log(cursorData);


//  sorting 
const sortingData = await prisma.post.findMany({
    orderBy: {
        // title: "asc",
        title: "desc",
    },
    where: {
        title: "This is title 4",
    }
})

console.log(sortingData);

};

paginationSorting();
