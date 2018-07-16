/*
 *
 * ListResources actions
 *
 */

import {
  DEFAULT_ACTION,

  LIST_RESOURCES_ACTION,
  LISTED_RESOURCES_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


export function listResourcesAction(payload){
	return{
		type: LIST_RESOURCES_ACTION,
		payload
	}
}

export function listedResourcesAction(payload){
	return{
		type: LISTED_RESOURCES_ACTION,
		payload
	}
}

