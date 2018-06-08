/*
 *
 * AddExecution reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({

  add_execution:null,
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
    default:
      return state;
  }
}

export default addExecutionReducer;
