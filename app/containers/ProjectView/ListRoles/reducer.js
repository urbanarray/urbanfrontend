/*
 *
 * ListRoles reducer
 *
 */

import { fromJS } from 'immutable';
import {
	DEFAULT_ACTION,
	LIST_ROLES_ACTION,
	LISTED_ROLES_ACTION,
} from './constants';

const initialState = fromJS({
	roles_list:null,
	loading: false,
	done: false
});

function listRolesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
	case LISTED_ROLES_ACTION:
      return state
        .set('roles_list', action.payload);
    default:
      return state;
  }
}

export default listRolesReducer;
