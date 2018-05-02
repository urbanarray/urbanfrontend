/*
 *
 * AddRoles actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_ROLES_ACTION,
  CREATED_ROLES_ACTION,
  LIST_ROLES_ACTION,
  LISTED_ROLES_ACTION,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createRolesAction(payload) {
  return {
    type: CREATE_ROLES_ACTION,
    payload
  };
}

export function createdRolesAction(payload) {
  return {
    type: CREATED_ROLES_ACTION,
    payload
  };
}

export function listRolesAction() {
  return {
    type: LIST_ROLES_ACTION,
  };
}

export function listedRolesAction(payload) {
  return {
    type: LISTED_ROLES_ACTION,
    payload
  };
}