/*
 *
 * Volunteer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_VOLUNTEER_ACTION,
  LISTED_VOLUNTEER_ACTION,

} from './constants';

const initialState = fromJS({
  volunteersList: null,
  loading: false,
  done: false,

});

function volunteerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    
    case LISTED_VOLUNTEER_ACTION: 
      return state
        .set('volunteersList', action.payload);
        
    default:
      return state;
  }
}

export default volunteerReducer;
