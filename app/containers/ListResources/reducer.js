/*
 *
 * ListResources reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,

  LIST_RESOURCES_ACTION,
  LISTED_RESOURCES_ACTION,
} from './constants';

const initialState = fromJS({
	listedResources: [],
	loading: false,
	done: false,
});

function listResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_RESOURCES_ACTION:
      return state
        .set('listedResources', action.payload)
        .set('loading', true)
        .set('done', false)

    case LISTED_RESOURCES_ACTION:
      return state
      .set('listedResources', action.payload)
      .set('loading', false)
      .set('done', true)
    default:
      return state;
  }
}

export default listResourcesReducer;
