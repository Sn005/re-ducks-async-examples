import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_AUTHORS_START } from "./types";
import { fetchAuthors } from "./actions";
import * as authorsService from "../../services/authors";

function* runGetAuthors(action: ReturnType<typeof fetchAuthors.start>) {
  try {
    const authors = yield call(authorsService.fetchAuthors);

    yield put(fetchAuthors.succeed({ authors }));
  } catch (error) {
    yield put(fetchAuthors.fail(error));
  }
}

export function* watchGetAuthors() {
  yield takeLatest(FETCH_AUTHORS_START, runGetAuthors);
}
