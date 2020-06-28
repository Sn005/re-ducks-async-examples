import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { authorsReducer, watchGetAuthors } from "./authors";
import { booksReducer, watchGetBooks } from "./books";

const rootSaga = function* root() {
  yield all([fork(watchGetAuthors), fork(watchGetBooks)]);
};

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
export const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
