/*
 *
 * ListCommunications actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function listCommunication(payload) {
  return {
    type: c.LIST_COMMUNICATION_ACTION,
    payload
  }
}

export function listedCommunication(payload) {
  return {
    type: c.LISTED_COMMUNICATION_ACTION,
    payload
  }
}
