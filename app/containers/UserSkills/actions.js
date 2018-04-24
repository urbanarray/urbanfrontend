/*
 *
 * UserSkills actions
 *
 */

import {
  CREATE_ACTION,
  CREATED_ACTION,
  UPDATE_ACTION,
  UPDATED_ACTION,
  LIST_ACTION,
  LISTED_ACTION,

} from './constants';

export function createAction(payload) {
  return {
    type: CREATE_ACTION,
    payload
  };
}

export function createdAction(payload) {
  return {
    type: CREATED_ACTION,
    payload
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

export function listAction(payload) {
  return {
    type: LIST_ACTION,
    payload
  };
}

export function listedAction(payload) {
  return {
    type: LISTED_ACTION,
    payload
  };
}




