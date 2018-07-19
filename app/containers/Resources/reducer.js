/*
 *
 * Resources reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_RESOURCES_ACTION,
  ADDED_RESOURCES_ACTION,

  LIST_PLACES_ACTION,
  LISTED_PLACES_ACTION,
  
  LIST_RESOURCES_ACTION,
  LISTED_RESOURCES_ACTION,

  DELETE_RESOURCES_ACTION

} from './constants';

const initialState = fromJS({
	addResources:[],
  listedPlaces: [],
  listedResources: [],
	loading: false,
	done: false,
  projectId: null,
  deleteResources: null,


});

function resourcesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ADD_RESOURCES_ACTION:
    	return state
    		.set('addResources', action.payload)
    		.set('loading', true )
    		.set('done', false)

    case ADDED_RESOURCES_ACTION:
    	return state
    		.set('addedResources', null)
    		.set('loading', false )
    		.set('done', true)

    case LIST_PLACES_ACTION:
      return state
        .set('loading', true )
        .set('done', false)

    case LISTED_PLACES_ACTION:
      return state
        .set('listedPlaces', action.payload)
        .set('loading', false)
        .set('done', true)

    case LIST_RESOURCES_ACTION:
      return state
        .set('projectId', action.payload)
        .set('loading', true)
        .set('done', false)

    case LISTED_RESOURCES_ACTION:
      return state
      .set('listedResources', action.payload)
      .set('loading', false)
      .set('done', true)
      
    case DELETE_RESOURCES_ACTION:
      return state
        .set('deleteResources', action.payload);

    default:
      return state;

  }
}

export default resourcesReducer;
