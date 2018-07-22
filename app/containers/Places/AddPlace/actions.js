/*
 *
 * AddPlace actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_PlACE_ACTION,
  CREATED_PlACE_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createPlaceAction(payload) {

  return {
    type: CREATE_PlACE_ACTION,
    payload
  }

}

export function createdPlaceAction(payload) {
  return {
    type: CREATED_PlACE_ACTION,
    payload
  }
}
