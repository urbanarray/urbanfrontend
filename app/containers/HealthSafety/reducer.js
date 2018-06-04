/*
 *
 * HealthSafety reducer
 *
 */

import { fromJS } from 'immutable';
import * as v from './constants';

const initialState = fromJS({
  add_healthsafety: null,
  loading: false,
  done: false,
});


function healthSafetyReducer(state = initialState, action) {
  switch (action.type) {
    case v.DEFAULT_ACTION:
      return state;
    case v.CREATE_HEALTHSAFETY_ACTION:
      return state
        .set('add_healthsafety', action.payload)
        .set('loading', true)
        .set('done', false);
    case v.CREATED_HEALTHSAFETY_ACTION:
      return state
        .set('add_healthsafety', null )
        .set('loading', false)    
        .set('done', true);
    default:
      return state;
  }
}

export default healthSafetyReducer;
