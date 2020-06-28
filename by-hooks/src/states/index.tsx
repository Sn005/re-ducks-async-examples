import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authorsReducer } from "./authors";
import { booksReducer } from "./books";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};
