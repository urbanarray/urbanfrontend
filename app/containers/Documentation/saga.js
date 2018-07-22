import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import { createDocumentAction, createdDocumentAction, listedDocumentAction } from './actions';
import { CREATE_DOCUMENT_ACTION, LIST_DOCUMENT_ACTION } from './constants';
import { makeSelectDocument, makeSelectListDocument } from './selectors';
import { documentAPI, listDocumentAPI } from './api';
// Individual exports for testing

export function* create() {
  try {
      const document = yield select(makeSelectDocument());
      const response = yield call(documentAPI, document);
      yield put(createdDocumentAction(response.data));

  } catch (error) {
    console.log(error)
  }
}

export function* listDocs() {

  try {

    const list = yield select(makeSelectListDocument());
    const response = yield call(listDocumentAPI, list);
    yield put(listedDocumentAction(response.data));

  } catch (error) {
    console.log(error);
  }

}



export default function* defaultSaga() {
  yield takeLatest(CREATE_DOCUMENT_ACTION, create),
  yield takeLatest(LIST_DOCUMENT_ACTION, listDocs)
}
