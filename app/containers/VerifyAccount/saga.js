import { takeLatest, call, put, select } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
import { makeSelectUserId } from './selectors';
import { verifyApi } from './api';
import {verifiedAction} from './actions';

export function* verify() {
  const id = yield select(makeSelectUserId());
  const response = yield call(verifyApi, id);
  // console.log(response);
  yield put(verifiedAction());
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DEFAULT_ACTION, verify);
}
