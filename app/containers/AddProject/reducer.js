/*
 *
 * AddProject reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, ADD_PROJECT_ACTION, ADDED_PROJECT_ACTION
} from './constants';

const initialState = fromJS({

  add_project: null,
  loading: false,
  done: false,

});

function addProjectReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    
    case ADD_PROJECT_ACTION:
        return state
          .set('add_project', action.payload)
          .set('loading', true)
          .set('done', false);
    case ADDED_PROJECT_ACTION: 
        return state
          .set('add_project', null)
          .set('loading', false)
          .set('done', true)
          
      default:
      return state;
  }
}

export default addProjectReducer;
