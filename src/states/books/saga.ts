import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_BOOKS_START } from "./types";
import { fetchBooks } from "./actions";
import * as booksServices from "../../services/books";

function* runGetBooks(action: ReturnType<typeof fetchBooks.start>) {
  const { authorId } = action.payload;
  try {
    const books = yield call(booksServices.fetchBooksByAuthorId, authorId);

    yield put(fetchBooks.succeed({ authorId }, { books }));
  } catch (error) {
    yield put(fetchBooks.fail({ authorId }, error));
  }
}

export function* watchGetBooks() {
  yield takeLatest(FETCH_BOOKS_START, runGetBooks);
}
