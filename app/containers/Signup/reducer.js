/*
 *
 * Signup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_ACTION,
  SOCIAL_SIGNUP_ACTION,
  SOCIAL_LOGGED_IN_ACTION,
  LINKEDIN_ACTION,
} from './constants';

const initialState = fromJS({
  socialSignup:{},
  linkedinSignup:{},
  loggedInUser:{},
  signup:{},
  loading: false,
  done: false,

});

function signupReducer(state = initialState, action) {
  switch (action.type) {
 
    case SOCIAL_SIGNUP_ACTION:
      return state
      .set('socialSignup', action.payload)
      .set('loading', true)
      .set('done', false);
    
    case SOCIAL_LOGGED_IN_ACTION:
      return state
        .set('loggedInUser', action.payload)      
        .set('loading', false)      
        .set('done', true);

    case SIGNUP_ACTION:
      return state
        .set('signup', action.payload)
        .set('loading', true)
        .set('done', false);

    case LINKEDIN_ACTION:
      return state
        .set('linkedinSignup', action.payload)
        .set('loading', true)
        .set('done', false);

    default:
      return state;
  }
}

export default signupReducer;
