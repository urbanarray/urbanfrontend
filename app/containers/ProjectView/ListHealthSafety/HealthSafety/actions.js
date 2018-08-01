/*
 *
 * HealthSafety actions
 *
 */

import * as v from './constants';

export function defaultAction() {
  return {
    type: v.DEFAULT_ACTION,
  };
}

export function createHealthSafetyAction(payload) {
  return {
    type: v.CREATE_HEALTHSAFETY_ACTION,
    payload
  };
}

export function createdHealthSafetyAction(payload) {
  return {
    type: v.CREATED_HEALTHSAFETY_ACTION,
    payload
  };
}

export function listHealthSafetyAction(payload) {
  return {
    type: v.LIST_HEALTHSAFETY_ACTION,
    payload
  };
}
export function listedHealthSafetyAction(payload) {
  return {
    type: v.LISTED_HEALTHSAFETY_ACTION,
    payload
  };
}
