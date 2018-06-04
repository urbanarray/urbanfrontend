/*
 *
 * ListProjects actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function listProjectsAction() {
  return {
    type: c.LIST_PROJECTS_ACTION,
  };
}

export function listedProjectsAction(payload) {
  return {
    type: c.LISTED_PROJECTS_ACTION,
    payload
  };
}

export function updateAction(payload) {
  return {
    type: c.UPDATE_PROJECT_ACTION,
    payload
  };
}

export function updatedAction(payload) {
  return {
    type: c.UPDATED_PROJECT_ACTION,
    payload
  };
}

export function deleteAction(payload) {
  return {
    type: c.DELETE_PROJECT_ACTION,
    payload
  };
}

export function deletedAction(payload) {
  return {
    type: c.DELETED_PROJECT_ACTION,
    payload
  };
}

export function listPlacesAction() {
  return {
    type: c.LIST_PLACES_ACTION,
  };
}

export function listedPlacesAction(payload) {
  return {
    type: c.LISTED_PLACES_ACTION,
    payload
  };
}





export const getPagination = (payload) => (
  {
    type: c.GET_PAGINATION,
    payload
  }
);


export const setPagination = (payload) => (
  {
    type: c.SET_PAGINATION,
    payload
  }
);

