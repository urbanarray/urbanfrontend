/*
 *
 * UpdateResources reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,

  UPDATE_RESOURCES_ACTION,
  UPDATED_RESOURCES_ACTION,

  LIST_PLACES_ACTION,
  LISTED_PLACES_ACTION,

} from './constants';

const initialState = fromJS({
	updateResources: [],
  listedPlaces: [],
	loading: false,
	done: false,
  updateDone: false,
});

function updateResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case LIST_PLACES_ACTION:
      return state
        .set('loading', true)
        .set('done', false)

    case LISTED_PLACES_ACTION:
      return state
        .set('listedPlaces', action.payload)
        .set('loading', false)
        .set('done', true)

    default:
      return state;
  }
}

export default updateResourcesReducer;
