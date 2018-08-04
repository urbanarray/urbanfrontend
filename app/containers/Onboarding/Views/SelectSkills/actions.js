// Select skills actions

import {
  SUBMIT_SKILLS
} from './constants';

export function submitSkillsAction(payload) {
  console.log('select skills action is being called')
  return {
    type: SUBMIT_SKILLS,
    payload
  };
}
