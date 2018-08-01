/*
 *
 * AddExecution reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({

  add_execution:null,
  execution_list: [],
  execution_loading: false,
  execution_done: false,
  loading: false,
  done: false,

});

function addExecutionReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    case c.CREATE_EXECUTION_ACTION:
      return state
        .set('add_execution', action.payload)
        .set('loading', true)
        .set('done', false);
    case c.CREATED_EXECUTION_ACTION:
      return state
        .set('add_execution', null)
        .set('loading', false)
        .set('done', true);
    case c.LIST_EXECUTION_ACTION:
      return state
        .set('execution_list', action.payload)
        .set('execution_loading', true)
        .set('execution_done', false)
    case c.LISTED_EXECUTION_ACTION:
      return state
        .set('execution_list', action.payload)
        .set('execution_loading', false)
        .set('execution_done', true)
    default:
      return state;
  }
}

export default addExecutionReducer;
