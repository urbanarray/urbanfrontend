/*
 *
 * YourRole reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  yourRoles:[
    {
      role: 'General Labour',
      project: 'Urban Frame I',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
    },    
    {
      role: 'Carpenter II',
      project: 'Urban Frame II',
      date: 'Feb 2',
      startTime: '2am',
      endTime: '4am',
    },

  ]
});

function yourRoleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default yourRoleReducer;
