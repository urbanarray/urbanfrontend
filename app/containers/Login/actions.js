/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CREDENTIALS_ACTION,
  LOGGING_ACTION,
  LOGIN_FAILED,
  LOGGED_IN,
  RESET,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setCredentialsAction(credentials) {
  return {
    type: SET_CREDENTIALS_ACTION,
    payload: credentials,
  };
}

export function loggingInAction() {
  return {
    type: LOGGING_ACTION,
  };
}

export function loginFailedAction(payload) {
  return {
    type: LOGIN_FAILED,
    payload,
  };
}

export function loggedInAction(payload) {

  return {
    type: LOGGED_IN,
    payload,
  };
}


export function loginReset() {
  return {
    type: RESET,
  };
}


