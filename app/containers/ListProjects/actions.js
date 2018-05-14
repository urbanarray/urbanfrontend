/*
 *
 * ListProjects actions
 *
 */

import {
  DEFAULT_ACTION,
  LIST_PROJECTS_ACTION,
  LISTED_PROJECTS_ACTION,

  UPDATE_PROJECT_ACTION,
  UPDATED_PROJECT_ACTION,

  DELETE_PROJECT_ACTION,
  DELETED_PROJECT_ACTION,
  
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function listProjectsAction() {
  return {
    type: LIST_PROJECTS_ACTION,
  };
}

export function listedProjectsAction(payload) {
  return {
    type: LISTED_PROJECTS_ACTION,
    payload
  };
}

export function updateAction(payload) {
  return {
    type: UPDATE_PROJECT_ACTION,
    payload
  };
}

export function updatedAction(payload) {
  return {
    type: UPDATED_PROJECT_ACTION,
    payload
  };
}

export function deleteAction(payload) {
  return {
    type: DELETE_PROJECT_ACTION,
    payload
  };
}

export function deletedAction(payload) {
  return {
    type: DELETED_PROJECT_ACTION,
    payload
  };
}
