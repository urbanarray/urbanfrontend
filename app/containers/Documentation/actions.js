/*
 *
 * Documentation actions
 *
 */

import * as b from './constants';

export function defaultAction() {
  return {
    type: b.DEFAULT_ACTION,
  };
}

export function createDocumentAction(payload) {
  return {
    type: b.CREATE_DOCUMENT_ACTION,
    payload
  };
}


export function createdDocumentAction(payload) {
  return {
    type: b.CREATED_DOCUMENT_ACTION,
    payload
  }
}
