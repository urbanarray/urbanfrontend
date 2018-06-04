import { createSelector } from 'reselect';

/**
 * Direct selector to the listProjects state domain
 */
const selectListProjectsDomain = (state) => state.get('listProjects');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListProjects
 */

const makeSelectListProjects = () => createSelector(
  selectListProjectsDomain,
  (substate) => substate.toJS()
);

const makeSelectUpdateProject = () => createSelector(
  selectListProjectsDomain,
  (substate) => substate.get('projectDetails')
);


const makeSelectProjectId = () => createSelector(
  selectListProjectsDomain,
  (substate) => substate.get('deleteProject')
);


const makeSelectPlaces = () => createSelector(
  selectListProjectsDomain,
  (substate) => substate.get('list_places')

);

export default makeSelectListProjects;
export {
  selectListProjectsDomain,
   makeSelectUpdateProject,
  makeSelectListProjects,
   makeSelectProjectId,
   makeSelectPlaces
   
  
};
