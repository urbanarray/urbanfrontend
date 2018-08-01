/*
 *
 * ResetPassword reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_NEW_PASSWORD,
  PASSWORD_RESET_DONE,
  ERROR,

} from './constants';

const initialState = fromJS({
  newPassword:null,
  done:false,
  loading:false,
  serverError:null,

});

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PASSWORD:
      return state
        .set('newPassword', action.payload)
        .set('loading', true);
  
    case PASSWORD_RESET_DONE:
      return state
        .set('newPassword', null)
        .set('loading', false)
        .set('done', true);

    case ERROR:
      return state
        .set('serverError', action.payload);

    default:
      return state;
  }
}

export default resetPasswordReducer;
