/*
 *
 * ProjectView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  projectView:
    {
      name: 'Garden',
      size: '4*3*6',
      quantity: 4,
      date: 'Nov 10',
      startTime: '3am',
      endTime: '5am',
      project: 'Rehab III',
      description: 'Some detiled description here',
      goals: 'goals.............',
      address: 'Chicago, IL 600 Canal',
      weather: 'Link',
      projectDetails:{
        execution: "Medical/Safty",
        anxGroups: "communication",
      }
  },
  leadership:[
    {
      firstName: 'John',
      lastName: 'Jon',
      picture: '1.jpg'
    },    
    {
      firstName: 'Elon',
      lastName: 'Eln',
      picture: '1.jpg'
    },

  ],
  
  team:[
    {
      firstName: 'Nizar',
      lastName: 'Niar',
      picture: '1.jpg'
    },    
    {
      firstName: 'Max',
      lastName: 'Ma',
      picture: '1.jpg'
    },
    {
      firstName: 'Mem',
      lastName: 'Me',
      picture: '1.jpg'
    },    
   

  ],
  projectRoles: [
    {
      title: 'Landscape Prep I',
      description: 'Some Description here',
      frame: 'Urban Farm II',
      role: 'General Labour',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
      pts: '776',
      ac: '1.4',
    },
    {
      title: 'Landscape Prep II',
      description: 'Some Description here',
      frame: 'Urban Farm II',
      role: 'General Labour',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
      pts: '776',
      ac: '1.4',
    },
  ],

  projectResources: [
    {
      name: 'Lumber',
      size: '4*3*6',
      quantity: 4,
      date: 'Nov 10',
      startTime: '3am',
      endTime: '5am',
      project: 'Rehab III',
    },
    {
      name: 'Door',
      size: '2*3*7',
      quantity: 14,
      date: 'Dec 12',
      startTime: '2pm',
      endTime: '6pm',
      project: 'Semi ',
    },
  

  ],
  
});

function projectViewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default projectViewReducer;
