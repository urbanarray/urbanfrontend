import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import { createDocumentAction, createdDocumentAction } from "./actions";
import { CREATE_DOCUMENT_ACTION } from "./constants";
import { makeSelectDocument } from "./selectors";
import { documentAPI } from "./api";
// Individual exports for testing

export function* create() {
  try {
      const document = yield select(makeSelectDocument());
      const response = yield call(documentAPI, document);
      console.log(response);
      yield put(createdDocumentAction(response.data));

  } catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(CREATE_DOCUMENT_ACTION, create)
}
