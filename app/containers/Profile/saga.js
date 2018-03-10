import { takeLatest, call, put, select } from 'redux-saga/effects';
import {CREATE_PROFILE_ACTION} from './constants';
import {createdAction} from './actions';
import {makeSelectCreateProfile} from './selectors';
import {profileApi} from './api';


export function* create(params) {
  const profileDetails = yield select(makeSelectCreateProfile());
  const response = yield call(profileApi, profileDetails);
  console.log(response);
  
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CREATE_PROFILE_ACTION, create);
}
