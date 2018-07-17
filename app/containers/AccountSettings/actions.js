/*
 *
 * AccountSettings actions
 *
 */

import {
  DEFAULT_ACTION,
  SKILLS_LIST_ACTION,
  SKILLS_LISTED_ACTION,
  CREATE_USER_SKILLS_ACTION,
  CREATED_USER_SKILLS_ACTION,
  LIST_USER_SKILLS_ACTION,
  LISTED_USER_SKILLS_ACTION,
  DELETE_USER_SKILLS_ACTION,
  DELETED_USER_SKILLS_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function skillsListAction() {
  return {
    type: SKILLS_LIST_ACTION,
  };
}

export function skillsListedAction(payload) {
  return {
    type: SKILLS_LISTED_ACTION,
    payload
  };
}

export function createUserSkillsAction(payload) {
  return {
    type: CREATE_USER_SKILLS_ACTION,
    payload
  };
}

export function createdUserSkillsAction(payload) {
  return {
    type: CREATED_USER_SKILLS_ACTION,
    payload
  };
}

export function listUserSkillsAction(payload) {
  return {
    type: LIST_USER_SKILLS_ACTION,
    payload
  };
}

export function listedUserSkillsAction(payload) {
  return {
    type: LISTED_USER_SKILLS_ACTION,
    payload
  };
}

export function deleteUserSkillsAction(payload) {
  return {
    type: DELETE_USER_SKILLS_ACTION,
    payload
  };
}

export function deletedUserSkillsAction(payload) {
  return {
    type: DELETED_USER_SKILLS_ACTION,
    payload
  };
}
