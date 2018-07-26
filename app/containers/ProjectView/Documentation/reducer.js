/*
 *
 * Documentation reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  
  create_document: null,
  loading: false,
  done: false,

  list_document: null,
  list_loading: false,
  list_done: false

});

function documentationReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    case c.CREATE_DOCUMENT_ACTION:
      return state
        .set('create_document', action.payload)
        .set('loading', true)
        .set('done', false)
    case c.CREATED_DOCUMENT_ACTION:
      return state
        .set('create_document', null)
        .set('loading', false)
        .set('done', true);
    case c.LIST_DOCUMENT_ACTION:
      return state
        .set('list_document', action.payload)
        .set('list_loading', true )
        .set('list_done', false);
    case c.LISTED_DOCUMENT_ACTION:
      return state
        .set('list_document', action.payload)
        .set('list_loading', false )
        .set('list_done', true)
    default:
      return state;
  }
}

export default documentationReducer;
