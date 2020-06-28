import { Reducer } from "redux";

import { BooskActions } from "./actions";
import { ADD_BOOKS } from "./types";
import { Book } from "../../domains/books";

export type BooksState = {
  books: Book[];
};

const initialState: BooksState = {
  books: [],
};

export const booksReducer: Reducer<BooksState, BooskActions> = (
  state: BooksState = initialState,
  action: BooskActions
) => {
  switch (action.type) {
    case ADD_BOOKS:
      return {
        ...state,
        books: action.payload.result.books,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};
