/*
 *
 * ProfileDetails reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  UPDATE_ACTION,
  UPDATED_ACTION,
} from './constants';

const initialState = fromJS({
  profileDetails: {},
  userProfile: {},
  loading: false,
  done: false,
  updateDone: false,
});

function profileDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

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

export default profileDetailsReducer;
