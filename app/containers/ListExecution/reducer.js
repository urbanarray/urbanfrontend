/*
 *
 * ListExecution reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_EXECUTION_ACTION,
  LISTED_EXECUTION_ACTION

} from './constants';

const initialState = fromJS({
  execution_list: [],
  loading: false,
  done: false,
});

function listExecutionReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LIST_EXECUTION_ACTION:
      return state
        .set('execution_list', action.payload)
        .set('loading', true)
        .set('done', false)
    case LISTED_EXECUTION_ACTION:
      return state
        .set('execution_list', action.payload)
        .set('loading', false)
        .set('done', true)
    default:
      return state;
  }
}

export default listExecutionReducer;
