import * as faker from "faker";
import { Author } from "./src/domains/authors";
import { Book } from "./src/domains/books";
import jsonServer from "json-server";

const createMockDb = () => {
  const authorsCount = 10;
  const authors: Author[] = [...Array(authorsCount)].map((v, i) => {
    return {
      name: faker.name.findName(),
      id: i,
    };
  });
  const books: Book[] = [...Array(100)].map((v, i) => {
    return {
      title: faker.lorem.words(),
      authorId: Math.floor(Math.random() * authorsCount),
      id: i,
    };
  });
  return { authors, books };
};
const server = jsonServer.create();
const router = jsonServer.router(createMockDb());
const middlewares = jsonServer.defaults();
const port = 4001;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
