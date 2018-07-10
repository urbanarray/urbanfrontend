/*
 *
 * ListHealthSafety actions
 *
 */

import * as c from './constants';


export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function listHealthSafetyAction(payload) {
  return {
    type: c.LIST_HEALTHSAFETY_ACTION,
    payload
  };
}
export function listedHealthSafetyAction(payload) {
  return {
    type: c.LISTED_HEALTHSAFETY_ACTION,
    payload
  };
}