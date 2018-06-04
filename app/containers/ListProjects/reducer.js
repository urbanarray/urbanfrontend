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

  list_places: null,
  loading_places: null,
  done_places: null,

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
      
      case c.LIST_PLACES_ACTION:
        return state
          .set('list_places', null)
          .set('loading_places', true)
          .set('done_places', false);
      case c.LISTED_PLACES_ACTION:
        return state
          .set('list_places', action.payload)
          .set('loading_places', false)
          .set('done_places', true);
      
      case c.GET_PAGINATION:
        const pg = fromJS(state.get('pagination')).toJS();
        pg.page_no = action.payload;
        return state.set('pagination', pg);
      
      default:
        return state;
  }
}

export default listProjectsReducer;
