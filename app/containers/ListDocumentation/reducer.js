/*
 *
 * ListDocumentation reducer
 *
 */

import { fromJS } from 'immutable';
import {
	DEFAULT_ACTION,
	LIST_DOCUMENT_ACTION,
	LISTED_DOCUMENT_ACTION,
} from './constants';

const initialState = fromJS({

	list_document: [],
	loading: false,
	done: false

});

function listDocumentationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_DOCUMENT_ACTION:
      return state
        .set('list_document', action.payload)
        .set('loading', true )
        .set('done', false );
    case LISTED_DOCUMENT_ACTION:
      return state
        .set('list_document', action.payload)
        .set('loading', false )
        .set('done', true )

    default:
      return state;
  }
}

export default listDocumentationReducer;
