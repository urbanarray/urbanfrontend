/*
 *
 * Places reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  
  listPlaces: null,
  deletePlace: null,
  updatePlace: null,
  loading: false,
  done: false,
  updateDone: false,

});

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    case c.LISTED_PLACES_ACTION:
      return state
        .set('listPlaces', action.payload);
    case c.DELETE_PLACES_ACTION:
      return state
        .set('deletePlace', action.payload);
    case c.UPDATE_PLACES_ACTION:
      return state  
        .set('updatePlace', action.payload)
        .set('loading', true)
        .set('updateDone', false);
    case c.UPDATED_PLACES_ACTION:
      return state
        .set('updatePlace', null)
        .set('loading', false)
        .set('updateDone', true)
      default:
      return state;
  }
}

export default placesReducer;
