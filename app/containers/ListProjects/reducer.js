/*
 *
 * ListProjects reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LIST_PROJECTS_ACTION,
  LISTED_PROJECTS_ACTION,

  UPDATE_PROJECT_ACTION,
  UPDATED_PROJECT_ACTION,

  DELETE_PROJECT_ACTION,
  DELETED_PROJECT_ACTION,


} from './constants';

const initialState = fromJS({
  list_projects: null,
  add_project: null,
  loading: false,
  projectDetails: null,
  done: false,
  name: null,
  updateDone: null,
  deleteProject: null,

});

function listProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    
    case LISTED_PROJECTS_ACTION:
      return state
          .set('list_projects', action.payload);

    case UPDATE_PROJECT_ACTION:
        return state
          .set('projectDetails', action.payload)
          .set('loading', true)
          .set('updateDone', false);

      case UPDATED_PROJECT_ACTION:
        return state
          .set('projectDetails', action.payload)
          .set('loading', false)
          .set('updateDone', true);
      
      case DELETE_PROJECT_ACTION:
        return state
          .set('deleteProject', action.payload);
      
      default:
        return state;
  }
}

export default listProjectsReducer;
