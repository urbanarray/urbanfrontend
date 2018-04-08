/*
 *
 * ForgetPassword reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEND_EMAIL,
  EMAIL_SENT
} from './constants';

const initialState = fromJS({
  email:null,
  done:false,
  loading:false,
});

function forgetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_EMAIL:
    return state
        .set('email', action.payload)
        .set('loading' , true)
        .set('done', false);
        
    case EMAIL_SENT:
      return state
        .set('email', null)
        .set('loading', false)
        .set('done', true);

    default:
      return state;
  }
}

export default forgetPasswordReducer;
