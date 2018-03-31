/*
 *
 * VerifyAccount reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  VERIFIED_ACTION,
} from './constants';

const initialState = fromJS({
  userId:null,
  isVerified: false,
});

function verifyAccountReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('userId', action.payload);
    
    case VERIFIED_ACTION:
      return state.set('isVerified', true);
      
    default:
      return state;
  }
}

export default verifyAccountReducer;
