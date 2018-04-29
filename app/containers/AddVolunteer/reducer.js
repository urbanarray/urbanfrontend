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

} from './constants';

const initialState = fromJS({
  addVolunteer: null,
  loading: false,
  done: false,
  
});

function addVolunteerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_VOLUNTEER_ACTION:
      return state
        .set('addVolunteer', action.payload)
        .set('loading', true)
        .set('done', false);
        
    case CREATED_VOLUNTEER_ACTION:
      return state
        .set('addVolunteer', null)
        .set('loading', false)
        .set('done', true);

      default:
      return state;
  }
}

export default addVolunteerReducer;
