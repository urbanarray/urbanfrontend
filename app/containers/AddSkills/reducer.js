/*
 *
 * AddSkills reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATE_SKILLS_ACTION,
  CREATED_SKILLS_ACTION,
  LIST_SKILLS_ACTION,
  LISTED_SKILLS_ACTION,

} from './constants';

const initialState = fromJS({
  skill: null,
  skills_list:null,
  loading: false,
  done: false
});

function addSkillsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

     case CREATE_SKILLS_ACTION:
      return state
        .set('skill', action.payload)
        .set('loading', true)
        .set('done', false);

    case CREATED_SKILLS_ACTION:
      return state
        .set('skill', null)
        .set('loading', false)
        .set('done', true);
        
    case LISTED_SKILLS_ACTION:
      return state
        .set('skills_list', action.payload);

    default:
      return state;
  }
}

export default addSkillsReducer;
