/*
 *
 * AddRoles reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CREATE_ROLES_ACTION,
  CREATED_ROLES_ACTION,
  LIST_ROLES_ACTION,
  LISTED_ROLES_ACTION,

} from './constants';

const initialState = fromJS({
  role: null,
  roles_list:null,
  loading: false,
  done: false
});

function addRolesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_ROLES_ACTION:
      return state
        .set('role', action.payload)
        .set('loading', true)
        .set('done', false);

    case CREATED_ROLES_ACTION:
      return state
        .set('role', null)
        .set('loading', false)
        .set('done', true);
        
    case LISTED_ROLES_ACTION:
      return state
        .set('roles_list', action.payload);

    default:
      return state;
  }
}

export default addRolesReducer;
