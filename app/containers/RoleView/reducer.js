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
    title: 'Landscape Prep I',
    description: 'Some description here',
    project: 'Urban Frame II',
    location: '600 w cawal chicago, IL',
    date: 'Oct 21',
    startTime: '5pm',
    endTime: '6pm',
  },

  tasks: [
    {
      title:'Gathering and Remove Litter',
      description: 'dispose of trash and waste material',
      startTime: '3pm',
      endTime: '5pm',
    }, 
    {
      title:'Mow Grass',
      description: 'mow grass in corner of lot',
      startTime: '1am',
      endTime: '4am',
    },
    {
      title:'Prep Planting Bed Soil',
      description: 'fertilizing planting bed',
      startTime: '9:30am',
      endTime: '10am',
    },

  ],
  similarRoles:[
    {
      title: 'Landscape Prep II',
      description: 'Detailed description for similar job...',
      date: 'Oct 23',
      startTime: '1am',
      endTime: '3am',
    },
    {
      title: 'Landscape Prep II',
      description: 'Detailed description for similar job...',
      date: 'Oct 23',
      startTime: '1am',
      endTime: '3am',
    },
  ],
  resources: [
              "gloves",
              "liher stick",
              "lawn mower",
              "lawn bags",
              "trash bags",
              "shovel",
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
