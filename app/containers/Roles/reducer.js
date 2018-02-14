/*
 *
 * Roles reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({

  openRoles : [
    {
      title: 'Landscape prep I',
      description: 'Some description here',
      frame: 'Urban Frame II',
      role: 'General Labour',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
      pts: '776',
      ac: '1.4',
    },
    {
      title: 'Landscape prep II',
      description: 'Some description here',
      frame: 'Urban Frame II',
      role: 'General Labour',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
      pts: '776',
      ac: '1.4',
    },
  
    
  ]

});

function rolesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default rolesReducer;
