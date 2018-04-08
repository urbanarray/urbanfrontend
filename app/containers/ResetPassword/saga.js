import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SET_NEW_PASSWORD } from "./constants";
import { passwordResetDoneAction, errorAction } from "./actions";
import { makeSelectNewPassword } from "./selectors";
import { setNewPasswordApi } from "./api";


export function* setNewPassword() {
  try {
    const passwordData = yield select(makeSelectNewPassword());
    const response = yield call(setNewPasswordApi, passwordData);
    console.log(response)
    yield put(passwordResetDoneAction(response.data));
  } catch (error) {
    const { data } = error.response;
    yield put(errorAction(data.errors));
    alert('Your password does not reset, Please reset it again.')
  }

}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SET_NEW_PASSWORD, setNewPassword);
  // See example in containers/HomePage/saga.js
}
