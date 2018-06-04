/*
 *
 * AddCommunications reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({

  addCommunications: [],
  loading: false,
  done: false

});

function addCommunicationsReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    case c.CREATE_COMMUNICATIONS_ACTION:
      return state
        .set('addCommunications', action.payload)
        .set('loading', true)
        .set('done', false);
    case c.CREATED_COMMUNICATIONS_ACTION:
      return state
        .set('addCommunications', null)
        .set('loading', false)
        .set('done', true)
    default:
      return state;
  }
}

export default addCommunicationsReducer;
