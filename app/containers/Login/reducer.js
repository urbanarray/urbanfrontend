/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_CREDENTIALS_ACTION,
  LOGGING_ACTION,
  LOGGED_IN,
  LOGIN_FAILED,
  RESET,
} from './constants';

const initialState = fromJS({
  credentials:{},
  isLoggedIn:false,
  loggingIn:false,
  access_token: '',
  user:null,
  serverError: null,

});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_CREDENTIALS_ACTION:
      return state
            .set('credentials', action.payload)
            .set('loggingIn', true);
            break; 
    case LOGGING_ACTION:
      return state
      .set('loggingIn', true); 
      break;
    case LOGGED_IN:
      return state      
      .set('credentials', {})
      .set('isLoggedIn', true)
      .set('access_token', action.payload.access_token)
      .set('user', action.payload.user);
      break;
    case LOGIN_FAILED:
      return state 
        .set('serverError', action.payload)
        .set('loggingIn', false);
        break;
    case RESET:
      return state
        .set('credentials', {})
        .set('serverError', null);
        break;
    default:
      return state;
  }
}

export default loginReducer;
