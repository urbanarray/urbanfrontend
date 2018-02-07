/*
 *
 * ProjectRoles reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  projectRoles: [
    {
      title: 'Landscape prep I',
      description: 'Some Description here',
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
      description: 'Some Description here',
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

function projectRolesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default projectRolesReducer;
