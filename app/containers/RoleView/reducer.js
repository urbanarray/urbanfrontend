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
<<<<<<< HEAD
=======
    project: 'Urban Farm II',
>>>>>>> 8aab2c803cbf2e8874671376002ac16e78161279
    location: '600 w cawal chicago, IL',
    date: 'Oct 21',
    startTime: '5pm',
    endTime: '6pm',
  },

  tasks: [
    {
<<<<<<< HEAD
      title:'Gathering and Remove Litter',
      description: 'dispose of trash and waste material',
      date: '14 March',
=======
      title:'Gather and Remove Litter',
      description: 'Dispose of trash and waste material',
>>>>>>> 8aab2c803cbf2e8874671376002ac16e78161279
      startTime: '3pm',
      endTime: '5pm',
    }, 
    {
      title:'Mow Grass',
<<<<<<< HEAD
      description: 'mow grass in corner of lot',
      date: '14 March',
=======
      description: 'Mow grass in corner of lot',
>>>>>>> 8aab2c803cbf2e8874671376002ac16e78161279
      startTime: '1am',
      endTime: '4am',
    },
    {
      title:'Prep Planting Bed Soil',
<<<<<<< HEAD
      description: 'fertilizing planting bed',
      date: '14 March',
=======
      description: 'Fertilizing planting bed',
>>>>>>> 8aab2c803cbf2e8874671376002ac16e78161279
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
