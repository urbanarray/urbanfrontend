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
