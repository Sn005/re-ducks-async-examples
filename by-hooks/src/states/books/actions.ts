import { ADD_BOOKS } from "./types";
import { Book } from "../../domains/books";

type Result = {
  books: Book[];
};

export const addBooks = (result: Result) => ({
  type: ADD_BOOKS,
  payload: { result },
});

export type BooskActions = ReturnType<typeof addBooks>;
