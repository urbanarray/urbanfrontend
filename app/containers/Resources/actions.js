/*
 *
 * Resources actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_RESOURCES_ACTION,
  ADDED_RESOURCES_ACTION,

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addResourcesAction(payload){
	return{
		type: ADD_RESOURCES_ACTION,
		payload,

	}
}

export function addedResourcesAction(){
	return{
		type: ADDED_RESOURCES_ACTION,
	}
}
