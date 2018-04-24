/*
 *
 * Profile reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_PROFILE_ACTION,
  CREATED_ACTION,
  UPDATE_ACTION,
  UPDATED_ACTION,
} from './constants';

const initialState = fromJS({
  profileDetails:{},
  userProfile:{},
  loading: false,
  done: false,
  updateDone: false,
  
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
        .set('userProfile', action.payload)
        .set('loading', false)
        .set('done', true);

    case UPDATE_ACTION:
      return state
        .set('profileDetails', action.payload)
        .set('loading', true)
        .set('updateDone', false);

    case UPDATED_ACTION:
      return state
        .set('profileDetails', null)
        .set('userProfile', action.payload)
        .set('loading', false)
        .set('updateDone', true);
    default:
      return state;
  }
}

export default profileReducer;
