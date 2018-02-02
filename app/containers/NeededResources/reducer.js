/*
 *
 * NeededResources reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({

  neededResources : [
    {
      name: 'lumber',
      size: '4*3*6',
      quantity:4,
      date: 'Nov 10',
      startTime: '3am',
      endTime: '5am',
      project: 'Rehab III',
    },
    {
      name: 'door',
      size: '2*3*7',
      quantity:14,
      date: 'Dec 12',
      startTime: '2pm',
      endTime: '6pm',
      project: 'Semi ',
    },
    {
      name: 'Paint',
      size: '...',
      quantity:6,
      date: 'Feb 2',
      startTime: '3am',
      endTime: '5am',
      project: 'Rehab IV',
    },

  ],

});

function neededResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default neededResourcesReducer;
