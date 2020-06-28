import { AppState } from "../index";
import { Author } from "../../domains/authors";

export const getAllAuthors = (state: AppState) => state.authors.authors;

export const getIsExistAuthors = (state: AppState) =>
  !!state.authors.authors.length;

export const getAuthorById = (state: AppState) => (
  authorId: number
): Author | undefined => {
  return state.authors.authors.filter((author) => author.id === authorId)[0];
};
