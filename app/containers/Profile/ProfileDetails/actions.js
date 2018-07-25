/*
 *
 * ProfileDetails actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_ACTION,
  UPDATED_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateAction(payload) {
  return {
    type: UPDATE_ACTION,
    payload
  };
}

export function updatedAction(payload) {
  return {
    type: UPDATED_ACTION,
    payload
  };
}
