/*
 *
 * Profile actions
 *
 */

import {
  CREATE_PROFILE_ACTION,
  CREATED_ACTION,
} from './constants';

export function createProfileAction(payload) {
  return {
    type: CREATE_PROFILE_ACTION,
    payload
  };
}

export function createdAction(payload) {
  return {
    type: CREATED_ACTION,
    payload
  };
}
