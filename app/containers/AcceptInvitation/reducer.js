/*
 *
 * AcceptInvitation reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FIND_USER_ACTION,
  USER_FOUND_ACTION,
  ACCEPT_INVITATION_ACTION,
  INVITATION_ACCEPTED_ACTION,
} from './constants';

const initialState = fromJS({
  accepted_invitation: null,
  loading: false,
  done: false,
  userId:null,
  user_data: null,

});

function acceptInvitationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
      
    case FIND_USER_ACTION:
      return state.set('userId', action.payload);
      
    case USER_FOUND_ACTION:
      return state.set('user_data', action.payload);
      
    case ACCEPT_INVITATION_ACTION:
      return state.set('accepted_invitation', action.payload)
              .set('loading', true)
              .set('done', false);

    case INVITATION_ACCEPTED_ACTION:
      return state.set('accepted_invitation', null)
                .set('loading', false)
                .set('done', true);

    default:
      return state;
  }
}

export default acceptInvitationReducer;
