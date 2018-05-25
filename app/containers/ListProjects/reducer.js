/*
 *
 * ListProjects reducer
 *
 */

import { fromJS } from 'immutable';
import * as c from './constants';

const initialState = fromJS({
  list_projects: null,
  add_project: null,
  loading: false,
  projectDetails: null,
  done: false,
  name: null,
  updateDone: null,
  deleteProject: null,
  pagination: {
    page_no: 1,
    limit: 10,
  }

});

function listProjectsReducer(state = initialState, action) {
  switch (action.type) {
    case c.DEFAULT_ACTION:
      return state;
    
    case c.LISTED_PROJECTS_ACTION:
      return state
          .set('list_projects', action.payload);

    case c.UPDATE_PROJECT_ACTION:
        return state
          .set('projectDetails', action.payload)
          .set('loading', true)
          .set('updateDone', false);

      case c.UPDATED_PROJECT_ACTION:
        return state
          .set('projectDetails', action.payload)
          .set('loading', false)
          .set('updateDone', true);
      
      case c.DELETE_PROJECT_ACTION:
        return state
          .set('deleteProject', action.payload);
      
          case c.GET_PAGINATION:
        const pg = fromJS(state.get('pagination')).toJS();
        pg.page_no = action.payload;
        return state.set('pagination', pg);
      
      default:
        return state;
  }
}

export default listProjectsReducer;
