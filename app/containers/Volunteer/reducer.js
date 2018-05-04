/*
 *
 * Volunteer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_VOLUNTEER_ACTION,
  LISTED_VOLUNTEER_ACTION,
  RESEND_INVITATION_ACTION,
  EMAIL_SENT_ACTION,

} from './constants';

const initialState = fromJS({
  volunteersList: null,
  loading: false,
  done: false,
  resend_email:null,
  email_sent:false,
});

function volunteerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    
    case LISTED_VOLUNTEER_ACTION: 
      return state
        .set('volunteersList', action.payload);
        
    case RESEND_INVITATION_ACTION: 
      return state
        .set('email_sent', false)
        .set('resend_email', action.payload);
        
    case EMAIL_SENT_ACTION: 
      return state
        .set('resend_email', null)
        .set('email_sent', true);
        
    default:
      return state;
  }
}

export default volunteerReducer;
