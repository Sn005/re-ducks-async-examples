import { Reducer } from "redux";
import { AxiosError } from "axios";

import { BooskActions } from "./actions";
import {
  FETCH_BOOKS_START,
  FETCH_BOOKS_SUCCEED,
  FETCH_BOOKS_FAIL,
} from "./types";
import { Book } from "../../domains/books";

export type BooksState = {
  books: Book[];
  isLoading: boolean;
  error?: AxiosError | null;
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
};

export const booksReducer: Reducer<BooksState, BooskActions> = (
  state: BooksState = initialState,
  action: BooskActions
) => {
  switch (action.type) {
    case FETCH_BOOKS_START:
      return {
        ...state,
        books: [],
        isLoading: true,
      };
    case FETCH_BOOKS_SUCCEED:
      return {
        ...state,
        books: action.payload.result.books,
        isLoading: false,
      };
    case FETCH_BOOKS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};
