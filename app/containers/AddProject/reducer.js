/*
 *
 * AddProject reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({

  add_project: null,
  loading: false,
  done: false,

  loadingPlaces: false,
  donePlace: false,
  list_places: null,

});

function addProjectReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    
    case c.ADD_PROJECT_ACTION:
        return state
          .set('add_project', action.payload)
          .set('loading', true)
          .set('done', false);
    case c.ADDED_PROJECT_ACTION: 
        return state
          .set('add_project', null)
          .set('loading', false)
          .set('done', true)
    case c.LISTED_PLCACES_ACTION:
      return state
        .set('list_places', action.payload)
        .set('loadingPlaces', true)
        .set('donePlace', false);
    case c.LISTED_PLCACES_ACTION:
      return state
        .set('list_places', null)
        .set('loadingPlaces', false)
        .set('donePlace', true);
          
      default:
      return state;
  }
}

export default addProjectReducer;
