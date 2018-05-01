import { takeLatest, call, put, select } from 'redux-saga/effects';
import { UPDATE_ACTION } from './constants';
import {  updatedAction } from './actions';
import { makeSelectUpdateProfile } from './selectors';
import { profileApi, updateProfileApi } from './api';
import { login as loginGLobal } from 'containers/App/actions';
import { saveState } from 'utils/persistState';
import { setToken } from 'utils/axios';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { fromJS } from 'immutable';


// update profile 
export function* update(params) {
  const profileDetails = yield select(makeSelectUpdateProfile());
  const response = yield call(updateProfileApi, profileDetails);
  console.log(response);
  const currentUser = yield select(makeSelectCurrentUser());
  const { user, access_token, refresh_token } = currentUser;
  const profile = response.data.profile;
  // console.log(profile);
  const loginInfo = fromJS({ user, access_token, refresh_token, profile });
  setToken(access_token);
  saveState(loginInfo);

  yield put(loginGLobal(loginInfo));
  yield put(updatedAction(response.data.profile));

}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(UPDATE_ACTION, update);

}
