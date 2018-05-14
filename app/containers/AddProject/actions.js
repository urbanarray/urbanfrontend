/*
 *
 * AddProject actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_PROJECT_ACTION,
  ADDED_PROJECT_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function addProjectAction(payload) {
  return {
    type: ADD_PROJECT_ACTION,
    payload
  };
}

export function addedProjectAction(payload) {
  return {
    type: ADDED_PROJECT_ACTION,
    payload
  };
}
