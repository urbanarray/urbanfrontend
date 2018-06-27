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
} from './constants';

const initialState = fromJS({
	addResources:[],
	resources_list:[],
	loading: false,
	done: false
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

    default:
      return state;

  }
}

export default resourcesReducer;
