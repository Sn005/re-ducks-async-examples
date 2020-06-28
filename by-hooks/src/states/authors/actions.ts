import { ADD_AUTHORS } from "./types";
import { Author } from "../../domains/authors";

type Result = {
  authors: Author[];
};

export const addAuthors = (result: Result) => ({
  type: ADD_AUTHORS,
  payload: { result },
});

export type AuthorsActions = ReturnType<typeof addAuthors>;
