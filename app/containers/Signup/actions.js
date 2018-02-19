/*
 *
 * Signup actions
 *
 */

import {
  DEFAULT_ACTION,
  SOCIAL_SIGNUP_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function socialSignupAction(payload) {
  return {
    type: SOCIAL_SIGNUP_ACTION,
    payload,
  };
}


