/*
 *
 * AddProject actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function addProjectAction(payload) {
  return {
    type: c.ADD_PROJECT_ACTION,
    payload
  };
}

export function addedProjectAction(payload) {
  return {
    type: c.ADDED_PROJECT_ACTION,
    payload
  };
}

export function listPlacesAction() {

  return {
    type: c.LIST_PLCACES_ACTION,
  };
}

export function listedPlacesAction(payload) {
  return {
    type: c.LISTED_PLCACES_ACTION,
    payload
  };
}
