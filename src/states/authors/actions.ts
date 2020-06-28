import { AxiosError } from "axios";
import {
  FETCH_AUTHORS_START,
  FETCH_AUTHORS_SUCCEED,
  FETCH_AUTHORS_FAIL,
} from "./types";
import { Author } from "../../domains/authors";

type Result = {
  authors: Author[];
};

export const fetchAuthors = {
  start: () => ({
    type: FETCH_AUTHORS_START,
  }),
  succeed: (result: Result) => ({
    type: FETCH_AUTHORS_SUCCEED,
    payload: { result },
  }),
  fail: (error: AxiosError) => ({
    type: FETCH_AUTHORS_FAIL,
    payload: { error },
    error: true,
  }),
};

export type AuthorsActions =
  | ReturnType<typeof fetchAuthors.start>
  | ReturnType<typeof fetchAuthors.succeed>
  | ReturnType<typeof fetchAuthors.fail>;
