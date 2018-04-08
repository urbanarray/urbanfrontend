/*
 *
 * ResetPassword actions
 *
 */

import {
  SET_NEW_PASSWORD,
  PASSWORD_RESET_DONE,
  ERROR,

} from './constants';

export function setNewPasswordAction(payload) {
  return {
    type: SET_NEW_PASSWORD,
    payload
  };
}

export function passwordResetDoneAction(payload) {
  return {
    type: PASSWORD_RESET_DONE,
    payload
  };
}

export function errorAction(payload) {
  return {
    type: ERROR,
    payload
  };
}


