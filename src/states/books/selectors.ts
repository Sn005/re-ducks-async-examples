import { AppState } from "../index";

export const getAllBooks = (state: AppState) => state.books.books;
export const getIsLoading = (state: AppState) => state.books.isLoading;
