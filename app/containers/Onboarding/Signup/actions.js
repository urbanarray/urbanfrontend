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
  SIGNED_UP_ACTION,
  ERRORS,

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

export function signedupAction(payload) {
  return {
    type: SIGNED_UP_ACTION,
    payload
  };
}

export function linkedinAction(payload) {
  return {
    type: LINKEDIN_ACTION,
    payload
  };
}

export function errors(payload) {
  return {
    type: ERRORS,
    payload
  };
}


