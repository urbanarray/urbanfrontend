/*
 *
 * Profile reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_PROFILE_ACTION,
  CREATED_ACTION,
} from './constants';

const initialState = fromJS({
  profileDetails:{},
  loading: false,
  done: false,

});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PROFILE_ACTION:
      return state
        .set('profileDetails', action.payload)
        .set('loading', true)
        .set('done', false);
        
    case CREATED_ACTION:
      return state
        .set('profileDetails', null)
        .set('loading', false)
        .set('done', true);

    default:
      return state;
  }
}

export default profileReducer;
