import { createSelector } from 'reselect';

/**
 * Direct selector to the addProject state domain
 */
const selectAddProjectDomain = (state) => state.get('addProject');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddProject
 */

const makeSelectAddProject = () => createSelector(
  selectAddProjectDomain,
  (substate) => substate.toJS()
);

const makeSelectAddPro = () => createSelector(
  selectAddProjectDomain,
  (substate) => substate.get('add_project'),
);



export default makeSelectAddProject;
export {
  selectAddProjectDomain,
  makeSelectAddPro,
};
