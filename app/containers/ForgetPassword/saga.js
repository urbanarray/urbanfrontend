import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SEND_EMAIL } from './constants';
import { emailSentAction } from './actions';
import { makeSelectEmail } from './selectors';
import { forgetPasswordApi } from './api';


export function* sendEmail() {
  try {
    const email = yield select(makeSelectEmail());
    const response = yield call(forgetPasswordApi, email);
    yield put(emailSentAction(response.data));
  } catch (error) {
    alert('Error with sending email, Please send email again.')
  }

}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SEND_EMAIL, sendEmail);
  // See example in containers/HomePage/saga.js
}
