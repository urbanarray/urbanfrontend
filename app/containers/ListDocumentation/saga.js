// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import { listedDocumentAction } from "./actions";
import { LIST_DOCUMENT_ACTION } from "./constants";
import { makeSelectListDocument } from "./selectors";
import { listDocumentAPI } from "./api";

export function* listDocs() {

  try {

    const list = yield select(makeSelectListDocument());
    const response = yield call(listDocumentAPI, list);
    yield put(listedDocumentAction(response.data.document));

  } catch (error) {
    console.log(error);
  }

}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_DOCUMENT_ACTION, listDocs)
}

