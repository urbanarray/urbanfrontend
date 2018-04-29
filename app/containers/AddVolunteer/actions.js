/*
 *
 * AddVolunteer actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_VOLUNTEER_ACTION,
  CREATED_VOLUNTEER_ACTION,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createAction(payload) {
  return {
    type: CREATE_VOLUNTEER_ACTION,
    payload
  };
}

export function createdAction(payload) {
  return {
    type: CREATED_VOLUNTEER_ACTION,
    payload
  };
}

