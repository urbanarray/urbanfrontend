/*
 *
 * Volunteer actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_VOLUNTEER_ACTION,
  LISTED_VOLUNTEER_ACTION,

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



