import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_COMMUNICATIONS_ACTION } from "./constants";
import { createdCommunicationsAction } from "./actions";
import { makeSelectCreateCommunications } from "./selectors";
import { createCommunicationsApi } from "./api";

export function* create() {
  try {

    const comm = yield select(makeSelectCreateCommunications());
    console.log(comm);
    const response = yield call(createCommunicationsApi, comm);
    console.log(response);
    yield put(createdCommunicationsAction(response.data));

  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_COMMUNICATIONS_ACTION, create);
  // See example in containers/HomePage/saga.js
}
