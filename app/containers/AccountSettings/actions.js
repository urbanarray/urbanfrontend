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

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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