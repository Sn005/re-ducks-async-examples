import { Reducer } from "redux";
import { AxiosError } from "axios";

import { AuthorsActions } from "./actions";
import {
  FETCH_AUTHORS_START,
  FETCH_AUTHORS_SUCCEED,
  FETCH_AUTHORS_FAIL,
} from "./types";
import { Author } from "../../domains/authors";

export type AuthorsState = {
  authors: Author[];
  isLoading: boolean;
  error?: AxiosError | null;
};

const initialState: AuthorsState = {
  authors: [],
  isLoading: false,
};

export const authorsReducer: Reducer<AuthorsState, AuthorsActions> = (
  state: AuthorsState = initialState,
  action: AuthorsActions
) => {
  switch (action.type) {
    case FETCH_AUTHORS_START:
      return {
        ...state,
        authors: [],
        isLoading: true,
      };
    case FETCH_AUTHORS_SUCCEED:
      return {
        ...state,
        authors: action.payload.result.authors,
        isLoading: false,
      };
    case FETCH_AUTHORS_FAIL:
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
