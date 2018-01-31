import { takeLatest, call, put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import {loginApi} from './api';
import {SET_CREDENTIALS_ACTION} from './constants';
import {makeSelectCredentials} from './selectors';
import {loggedInAction, loginFailedAction} from './actions';
import {login as loginGLobal} from 'containers/App/actions';
import {saveState} from 'utils/persistState';
import {setToken} from 'utils/axios';


export function* login(){
  try {
    const credentials = yield select(makeSelectCredentials());
    const res = yield call(loginApi, credentials);
    if (res.data) {
   
      const { user, token } = res.data;
      const access_token = token.accessToken;
      const refresh_token = token.refreshToken;

      let loginInfo = null;

      if (res.data && res.data.school) {

        const school = res.data.school;
        
         loginInfo = fromJS({user, access_token, refresh_token, school});

      }
      else{
        
         loginInfo = fromJS({user, access_token, refresh_token}); 
      
      }

      console.log(loginInfo);

      setToken(access_token);
      saveState(loginInfo);
     
      yield put(loginGLobal(loginInfo));
      yield put(loggedInAction({loginInfo}));
    }
  } catch (error) {
    console.log(error.response);

    if (error.response && error.response.data) {
      const { data } = error.response;

      yield put(loginFailedAction(data));
    }
  }


}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SET_CREDENTIALS_ACTION, login);
}
