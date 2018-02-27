/*
 *
 * Login actions
 *
 */

import {
  LOGIN_ACTION,
  SOCIAL_SIGNUP_ACTION,
  SOCIAL_LOGGED_IN_ACTION,
  LINKEDIN_ACTION,
  LOGGED_IN_ACTION

} from './constants';

export function loginAction(payload) {
  return {
    type: LOGIN_ACTION,
    payload
  };
}

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

export function linkedinAction(payload) {
  return {
    type: LINKEDIN_ACTION,
    payload
  };
}

export function loggedInAction(payload) {
  return {
    type: LOGGED_IN_ACTION,
    payload
  };
}

