import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  FIND_USER_ACTION,
  ACCEPT_INVITATION_ACTION,
  INVITATION_ACCEPTED_ACTION,
  INVITED_USER_DATA_ACTION
} from './constants';
import {
  userFoundAction,
  invitationAcceptedAction,
  invitedUserDataAction,
  acceptInvitationAction
} from './actions';
import {
  makeSelectUserId,
  makeSelectUserData,
  makeSelectInvitedUserData,
} from './selectors';

import { findUserApi, acceptInvitationApi } from './api';


export function* findUser() {
  try {
    const user_id = yield select(makeSelectUserId());
    const response = yield call(findUserApi, user_id);
    yield put(userFoundAction(response.data));
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

export function* inviteduserdata() {
  try {
    const user_id = yield select(makeSelectUserId());
    const invited_user_data = yield select(makeSelectInvitedUserData());
    const response = yield call(acceptInvitationApi, invited_user_data, user_id);
    yield put(invitationAcceptedAction(response.data));

    
  } catch (error) {
    alert('got it');
  }
}





// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FIND_USER_ACTION, findUser);
  yield takeLatest(ACCEPT_INVITATION_ACTION, acceptInvitation);
  yield takeLatest(INVITED_USER_DATA_ACTION, inviteduserdata)
  // See example in containers/HomePage/saga.js
}
