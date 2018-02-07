import { createSelector } from 'reselect';

/**
 * Direct selector to the projectRoles state domain
 */
const selectProjectRolesDomain = (state) => state.get('projectRoles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProjectRoles
 */

const makeSelectProjectRoles = () => createSelector(
  selectProjectRolesDomain,
  (substate) => substate.toJS()
);

export default makeSelectProjectRoles;
export {
  selectProjectRolesDomain,
};
