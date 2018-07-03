/*
 *
 * UpdateResources actions
 *
 */

import {
  DEFAULT_ACTION,
  UPDATE_RESOURCES_ACTION,
  UPDATED_RESOURCES_ACTION,
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