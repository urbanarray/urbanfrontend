/*
 *
 * AddRoles actions
 *
 */

import {
  DEFAULT_ACTION,
  CREATE_SKILLS_ACTION,
  CREATED_SKILLS_ACTION,
  LIST_SKILLS_ACTION,
  LISTED_SKILLS_ACTION,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createSkillsAction(payload) {
  return {
    type: CREATE_SKILLS_ACTION,
    payload
  };
}

export function createdSkillsAction(payload) {
  return {
    type: CREATED_SKILLS_ACTION,
    payload
  };
}

export function listSkillsAction() {
  return {
    type: LIST_SKILLS_ACTION,
  };
}

export function listedSkillsAction(payload) {
  return {
    type: LISTED_SKILLS_ACTION,
    payload
  };
}