/*
 *
 * RoleView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  roleDetail: {
    role: 'Landscape Prep I',
    project: 'Urban Farm II',
    description: 'Some description here',
    location: '600 w cawal chicago, IL',
    date: 'Oct 21',
    startTime: '5pm',
    endTime: '6pm',
  },

  tasks: [
    {
      title:'Gather and Remove Litter',
      date: '14 March',
      description: 'Dispose of trash and waste material',
      startTime: '3pm',
      endTime: '5pm',
    }, 
    {
      title:'Mow Grass',
      date: '14 March',
      description: 'Mow grass in corner of lot',
      startTime: '1am',
      endTime: '4am',
    },
    {
      title:'Prep Planting Bed Soil',
      date: '14 March',
      description: 'Fertilizing planting bed',
      startTime: '9:30am',
      endTime: '10am',
    },

  ],
  similarRoles:[
    {
      role: 'Landscape Prep II',
      description: 'Detailed description for similar job...',
      date: 'Oct 23',
      startTime: '1am',
      endTime: '3am',
    },
    {
      role: 'Landscape Prep II',
      description: 'Detailed description for similar job...',
      date: 'Oct 23',
      startTime: '1am',
      endTime: '3am',
    },
  ],
  resources: [
              "Gloves",
              "Liher stick",
              "Lawn mower",
              "Lawn bags",
              "Trash bags",
            ],

});

function roleViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default roleViewReducer;
