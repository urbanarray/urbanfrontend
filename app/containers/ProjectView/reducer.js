/*
 *
 * ProjectView reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  id: null,
  projectDetail: null,
  projectView:
    {
      name: 'Garden',
      size: '4*3*6',
      quantity: 4,
      date: 'Nov 10',
      startTime: '3am',
      endTime: '5am',
      project: 'Rehab III',
      description: 'Some detailed description will go here....',
      goals: [
          "Goal 1",
          "Goal 2",
          "Goal 3",
          "Goal 4",
        ],
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
      project: 'Urban Farm II',
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
      project: 'Urban Farm II',
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
      locationNeeded: 'Chicago, IL'

    },
    {
      name: 'Door',
      size: '2*3*7',
      quantity: 14,
      date: 'Dec 12',
      startTime: '2pm',
      endTime: '6pm',
      project: 'Semi ',
      locationNeeded: 'Chicago, IL'

    },
  

  ],
  
});

function projectViewReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    case c.PROJECT_VIEW_ACTION:
      return state
        .set('id', action.payload)

    case c.PROJECT_VIEWED_ACTION:
      return state
        .set('projectDetail', action.payload)
        
    default:
      return state;
  }
}

export default projectViewReducer;
