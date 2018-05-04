import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  LIST_VOLUNTEER_ACTION,
  RESEND_INVITATION_ACTION,
} from "./constants";
import {
  listedVolunteerAction,
  emailSentAction,

} from "./actions";
import {
  makeSelectEmail
} from "./selectors";

import { listVolunteersApi, resendEmailApi } from "./api";


export function* listVolunteers() {
  try {
    const response = yield call(listVolunteersApi, {});
    yield put(listedVolunteerAction(response.data.user));
  } catch (error) {
    alert('Got Error.')
  }

}


export function* resendEmail() {
  try {
    const email = yield select(makeSelectEmail());
    const response = yield call(resendEmailApi, email);
    yield put(emailSentAction());
  } catch (error) {
    alert('Got Error.')
  }

}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LIST_VOLUNTEER_ACTION, listVolunteers);
  yield takeLatest(RESEND_INVITATION_ACTION, resendEmail);
  // See example in containers/HomePage/saga.js
}
