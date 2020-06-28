import { AxiosError } from "axios";
import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCEED,
  FETCH_BOOKS_FAIL,
} from "./types";
import { Book } from "../../domains/books";

type Params = {
  authorId: number;
};

type Result = {
  books: Book[];
};
export const fetchBooks = {
  start: (params: Params) => ({
    type: FETCH_BOOKS_START,
    payload: params,
  }),
  succeed: (params: Params, result: Result) => ({
    type: FETCH_BOOKS_SUCCEED,
    payload: { params, result },
  }),
  fail: (params: Params, error: AxiosError) => ({
    type: FETCH_BOOKS_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type BooskActions =
  | ReturnType<typeof fetchBooks.start>
  | ReturnType<typeof fetchBooks.succeed>
  | ReturnType<typeof fetchBooks.fail>;
