/*
 *
 * Places actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}

export function listPlacesAction() {
  return {
    type: c.LIST_PLACES_ACTION,
  };
}

export function listedPlacesAction(payload) {
  return {
    type: c.LISTED_PLACES_ACTION,
    payload
  }
}

export function deletePlacesAction(payload){
  return {
    type: c.DELETE_PLACES_ACTION,
    payload
  }
}

export function  deletedPlacesAction(payload) {
  return {
    type: c.DELETED_PLACES_ACTION,
    payload
  }
}

export function updatePlacesAction(payload) {
  return {
    type: c.UPDATE_PLACES_ACTION,
    payload
  }
}

export function updatedPlacesAction(payload) {
  return {
    type: c.UPDATED_PLACES_ACTION,
    payload
  }
}