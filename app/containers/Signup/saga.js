import { takeLatest, call, put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { socialLoggedInAction, signedupAction, errors } from './actions';
import { makeSelectSocialSignup, makeSelectCustomSignup, makeSelectLinkedinSignup } from './selectors';
import { socialSignupApi, signupApi, linkedinSignupApi } from './api';
import { SOCIAL_SIGNUP_ACTION, SIGNUP_ACTION, LINKEDIN_ACTION } from './constants';
import { login as loginGLobal } from 'containers/App/actions';
import { saveState } from 'utils/persistState';
import { setToken } from 'utils/axios';


export function* socialSignup(){
  try {
    const socialSignupData = yield select(makeSelectSocialSignup());
    const response = yield call(socialSignupApi, socialSignupData);
    // console.log(response);
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

export function* linkedinSignup(){
  try {
    const linkedinSignupData = yield select(makeSelectLinkedinSignup());

    const response = yield call(linkedinSignupApi, linkedinSignupData);

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

export function* customSignup(){
  try {
    const customSignupData = yield select(makeSelectCustomSignup());
    const response = yield call(signupApi, customSignupData);
    yield put(signedupAction(response.data.user));
  } catch (error) {
    console.log(error);
    const {data} = error.response;
    yield put(errors(data.errors));
  }
}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SOCIAL_SIGNUP_ACTION, socialSignup);
  yield takeLatest(SIGNUP_ACTION, customSignup);
  yield takeLatest(LINKEDIN_ACTION, linkedinSignup);
}
