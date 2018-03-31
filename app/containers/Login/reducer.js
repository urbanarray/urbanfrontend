/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_ACTION,
  SOCIAL_SIGNUP_ACTION,
  SOCIAL_LOGGED_IN_ACTION,
  LINKEDIN_ACTION,
  LOGGED_IN_ACTION,
  ERROR,
} from './constants';

const initialState = fromJS({
  socialSignup: {},
  linkedinSignup: {},
  loggedInUser: {},
  loading: false,
  done: false,

  login:{},
  serverError: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return state
        .set('login', action.payload)
        .set('loading', true)
        .set('done', false);
      
    case SOCIAL_SIGNUP_ACTION:
      return state
        .set('socialSignup', action.payload)
        .set('loading', true)
        .set('done', false);
        
    case LINKEDIN_ACTION:
      return state
        .set('linkedinSignup', action.payload)
        .set('loading', true)
        .set('done', false);

    case SOCIAL_LOGGED_IN_ACTION:
      return state
        .set('loggedInUser', action.payload)
        .set('loading', false)
        .set('done', true);

    case LOGGED_IN_ACTION:
      return state
        .set('loggedInUser', action.payload)
        .set('login', null)
        .set('loading', false)
        .set('done', true);
    
    case ERROR:
      return state
        .set('serverError', action.payload);
    
    default:
      return state;
  }
}

export default loginReducer;
