/*
 *
 * AddPlace reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION, CREATE_PlACE_ACTION, CREATED_PlACE_ACTION,
} from './constants';

const initialState = fromJS({
  addPlace: null,
  loading: false,
  done: false,
});

function addPlaceReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_PlACE_ACTION:
      return state
        .set('addPlace', action.payload)
        .set('loading', true)
        .set('done', false);
    
    case CREATED_PlACE_ACTION:
      return state
        .set('addPlace', null)
        .set('loading', false)
        .set('done', true);
    default:
      return state;
  }
}

export default addPlaceReducer;
