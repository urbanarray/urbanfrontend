/*
 *
 * Resources actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_RESOURCES_ACTION,
  ADDED_RESOURCES_ACTION,

  LIST_PLACES_ACTION,
  LISTED_PLACES_ACTION,

  LIST_RESOURCES_ACTION,
  LISTED_RESOURCES_ACTION,


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

