import { takeLatest, call, put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { socialLoggedInAction, loggedInAction } from './actions';
import { makeSelectSocialSignup, makeSelectLinkedinSignup, makeSelectLoginCredentials } from './selectors';
import { socialSignupApi, linkedinSignupApi, loginApi } from './api';
import { SOCIAL_SIGNUP_ACTION, LINKEDIN_ACTION, LOGIN_ACTION } from './constants';
import { login as loginGLobal } from 'containers/App/actions';
import { saveState } from 'utils/persistState';
import { setToken } from 'utils/axios';

export function* socialSignup() {
  try {
    const socialSignupData = yield select(makeSelectSocialSignup());
    
    const response = yield call(socialSignupApi, socialSignupData);
    
    const { user, token, profile } = response.data;
    const access_token = token.accessToken;
    const refresh_token = token.refreshToken;

    const loginInfo = fromJS({ user,profile, access_token, refresh_token });
    setToken(access_token);
    saveState(loginInfo);

    yield put(loginGLobal(loginInfo));
    
    yield put(socialLoggedInAction(response.data));
  } catch (error) {
    console.log(error);
  }
}


export function* linkedinSignup() {
  try {
    const linkedinSignupData = yield select(makeSelectLinkedinSignup());

    const response = yield call(linkedinSignupApi, linkedinSignupData);
    console.log(response)
    const { linkedinData } = response.data;
    const accessToken = response.data.access_token;

    const socialSignupData = {
      name: linkedinData.firstName,
      email: linkedinData.emailAddress,
      picture: linkedinData.pictureUrl,
      source: 'linkedIn',
      userId: linkedinData.id,
      accessToken: accessToken
    }

    const responseData = yield call(socialSignupApi, socialSignupData);
   
    const { user, token, profile } = responseData.data;
    const access_token = token.accessToken;
    const refresh_token = token.refreshToken;

    const loginInfo = fromJS({ user, profile, access_token, refresh_token });
    setToken(access_token);
    saveState(loginInfo);

    yield put(loginGLobal(loginInfo));
    yield put(socialLoggedInAction(responseData.data));

  } catch (error) {
    console.log(error);
  }

}

export function* login() {
  try {
    const loginData = yield select(makeSelectLoginCredentials());
    const response = yield call(loginApi, loginData);
   
    const {profile, user, token } = response.data;
    const access_token = token.accessToken;
    const refresh_token = token.refreshToken;

    const loginInfo = fromJS({ user, profile, access_token, refresh_token }); 
    setToken(access_token);
    saveState(loginInfo);
    yield put(loginGLobal(loginInfo));
    yield put(loggedInAction(response.data));

  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SOCIAL_SIGNUP_ACTION, socialSignup);
  yield takeLatest(LINKEDIN_ACTION, linkedinSignup);
  yield takeLatest(LOGIN_ACTION, login);
  // See example in containers/HomePage/saga.js
}
