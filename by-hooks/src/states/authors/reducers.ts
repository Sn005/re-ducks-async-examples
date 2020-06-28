import { Reducer } from "redux";

import { AuthorsActions } from "./actions";
import { ADD_AUTHORS } from "./types";
import { Author } from "../../domains/authors";

export type AuthorsState = {
  authors: Author[];
};

const initialState: AuthorsState = {
  authors: [],
};

export const authorsReducer: Reducer<AuthorsState, AuthorsActions> = (
  state: AuthorsState = initialState,
  action: AuthorsActions
) => {
  switch (action.type) {
    case ADD_AUTHORS:
      return {
        ...state,
        authors: action.payload.result.authors,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};
