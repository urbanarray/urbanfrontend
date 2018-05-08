/*
 *
 * AcceptInvitation actions
 *
 */

import {
  DEFAULT_ACTION,
  FIND_USER_ACTION,
  USER_FOUND_ACTION,
  ACCEPT_INVITATION_ACTION,
  INVITATION_ACCEPTED_ACTION,
  INVITED_USER_DATA_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function findUserAction(payload) {
  return {
    type: FIND_USER_ACTION,
    payload
  };
}

export function userFoundAction(payload) {
  return {
    type: USER_FOUND_ACTION,
    payload
  };
}

export function acceptInvitationAction(payload) {
  return {
    type: ACCEPT_INVITATION_ACTION,
    payload
  };
}

export function invitationAcceptedAction(payload) {
  return {
    type: INVITATION_ACCEPTED_ACTION,
    payload
  };
}

export function invitedUserDataAction(payload) {
  return {
    type: INVITED_USER_DATA_ACTION,
    payload
  };
}