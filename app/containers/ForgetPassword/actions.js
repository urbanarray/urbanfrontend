/*
 *
 * ForgetPassword actions
 *
 */

import {
  SEND_EMAIL,
  EMAIL_SENT,
} from './constants';

export function sendEmailAction(payload) {
  return {
    type: SEND_EMAIL,
    payload
  };
}

export function emailSentAction(payload) {
  return {
    type: EMAIL_SENT,
    payload
  };
}



