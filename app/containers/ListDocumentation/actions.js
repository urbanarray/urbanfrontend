/*
 *
 * ListDocumentation actions
 *
 */

import {
	DEFAULT_ACTION,
	LIST_DOCUMENT_ACTION,
	LISTED_DOCUMENT_ACTION,
} from './constants';


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function listDocumentAction(payload) {
  return {
    type: LIST_DOCUMENT_ACTION,
    payload
  }
}

export function listedDocumentAction(payload) {
  return {
    type: LISTED_DOCUMENT_ACTION,
    payload
  }
}
