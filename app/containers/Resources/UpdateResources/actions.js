/*
 *
 * UpdateResources actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_RESOURCES_ACTION,
  UPDATED_RESOURCES_ACTION,

  LIST_PLACES_ACTION,
  LISTED_PLACES_ACTION,


} from './constants';
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function updateResourceAction(){
	return{
		type: UPDATE_RESOURCES_ACTION,
	}
}

export function updatedResourceAction(payload){
	return{
		type: UPDATED_RESOURCES_ACTION,
		payload
	}
}

export function listPlacesAction(){
	return{
		type: LIST_PLACES_ACTION,
	}
}

export function listedPlacesAction(payload){
	return{
		type: LISTED_PLACES_ACTION,
		payload
	}
}
