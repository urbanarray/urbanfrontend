/*
 *
 * Volunteer actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_VOLUNTEER_ACTION,
  LISTED_VOLUNTEER_ACTION,
  RESEND_INVITATION_ACTION,
  EMAIL_SENT_ACTION,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function listVolunteerAction() {
  return {
    type: LIST_VOLUNTEER_ACTION,
  };
}

export function listedVolunteerAction(payload) {
  return {
    type: LISTED_VOLUNTEER_ACTION,
    payload
  };
}

export function resendInvitationAction(payload) {
  return {
    type: RESEND_INVITATION_ACTION,
    payload
  };
}

export function emailSentAction(payload) {
  return {
    type: EMAIL_SENT_ACTION,
    payload
  };
}



