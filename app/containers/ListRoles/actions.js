/*
 *
 * ListRoles actions
 *
 */

import {
  DEFAULT_ACTION,

  LIST_ROLES_ACTION,
  LISTED_ROLES_ACTION,
  
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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