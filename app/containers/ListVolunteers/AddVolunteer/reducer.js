/*
 *
 * AddVolunteer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATE_VOLUNTEER_ACTION,
  CREATED_VOLUNTEER_ACTION,
  LISTED_ROLES_ACTION,

} from './constants';

const initialState = fromJS({
  volunteer: null,
  loading: false,
  done: false,
  roles_list:[],

});

function addVolunteerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_VOLUNTEER_ACTION:
      return state
        .set('volunteer', action.payload)
        .set('loading', true)
        .set('done', false);
        
    case CREATED_VOLUNTEER_ACTION:
      return state
        .set('volunteer', null)
        .set('loading', false)
        .set('done', true);
        
    case LISTED_ROLES_ACTION:
      return state
        .set('roles_list', action.payload);

      default:
      return state;
  }
}

export default addVolunteerReducer;
