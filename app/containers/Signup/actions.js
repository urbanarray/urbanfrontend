/*
 *
 * Signup actions
 *
 */

import {
  SOCIAL_SIGNUP_ACTION,
  SOCIAL_LOGGED_IN_ACTION,
  SIGNUP_ACTION,
  LINKEDIN_ACTION,

} from './constants';

export function socialSignupAction(payload) {
  return {
    type: SOCIAL_SIGNUP_ACTION,
    payload
  };
}

export function socialLoggedInAction(payload) {
  return {
    type: SOCIAL_LOGGED_IN_ACTION,
    payload
  };
}

export function signupAction(payload) {
  return {
    type: SIGNUP_ACTION,
    payload
  };
}

export function linkedinAction(payload) {
  return {
    type: LINKEDIN_ACTION,
    payload
  };
}


