/*
 *
 * Signup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SOCIAL_SIGNUP_ACTION,

} from './constants';

const initialState = fromJS({
  socialSignup:{},
  loading: false,
  done: false,
  
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SOCIAL_SIGNUP_ACTION:
      return state
      .set('socialSignup', action.payload);
      
    default:
      return state;
  }
}

export default signupReducer;
