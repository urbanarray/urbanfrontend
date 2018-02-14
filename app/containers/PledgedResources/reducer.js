/*
 *
 * PledgedResources reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  pledgedResources: [
    {
      item: 'Hammer',
      startTime: '5pm',
      endTime: '9pm',
      date: '5 Jan',
      project: 'Urban Farm II',
    },
    {
      item: 'Shovel',
      startTime: '2pm',
      endTime: '3pm',
      date: '1 Feb',
      project: 'Urban Farm I',
    },

  ],
});

function pledgedResourcesReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default pledgedResourcesReducer;
