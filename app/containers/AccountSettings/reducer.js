/*
 *
 * AccountSettings reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SKILLS_LIST_ACTION,
  SKILLS_LISTED_ACTION,
  CREATE_USER_SKILLS_ACTION,
  CREATED_USER_SKILLS_ACTION,
  LIST_USER_SKILLS_ACTION,
  
} from './constants';

const initialState = fromJS({
  listSkills: null,
  addUserSkills: {},
  listUserSkills: {},
  done: false,
  loading: false,

});

function accountSettingsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case SKILLS_LISTED_ACTION:
      return state
        .set('listSkills', action.payload);      

    case CREATE_USER_SKILLS_ACTION:
      return state
        .set('loading', true)
        .set('done', false)
        .set('addUserSkills', action.payload);

    case CREATED_USER_SKILLS_ACTION:
      return state
        .set('loading', false)
        .set('done', true)
        .set('addUserSkills', null);

    case LIST_USER_SKILLS_ACTION:
      return state
        .set('loading', false)
        .set('done', true)
        .set('listUserSkills', action.payload);

      
    default:
      return state;
  }
}

export default accountSettingsReducer;
