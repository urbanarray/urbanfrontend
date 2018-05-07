import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  FIND_USER_ACTION,
  ACCEPT_INVITATION_ACTION,
} from "./constants";
import {
  userFoundAction,
  invitationAcceptedAction,

} from "./actions";
import {
  makeSelectUserId,
  makeSelectUserData,
} from "./selectors";

import { findUserApi, acceptInvitationApi } from "./api";


export function* findUser() {
  try {
    const user_id = yield select(makeSelectUserId());
    const response = yield call(findUserApi, user_id);
    yield put(findUserApi(response.data));
  } catch (error) {
    alert('Got Error.')
  }

}


export function* acceptInvitation() {
  try {
    const user_data = yield select(makeSelectUserData());
    const response = yield call(acceptInvitationApi, user_data);
    yield put(invitationAcceptedAction(response.data));
  } catch (error) {
    alert('Got Error.')
  }
    
}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FIND_USER_ACTION, findUser);
  yield takeLatest(ACCEPT_INVITATION_ACTION, acceptInvitation);
  // See example in containers/HomePage/saga.js
}
