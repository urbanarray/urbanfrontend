import { createSelector } from 'reselect';

/**
 * Direct selector to the roles state domain
 */
const selectRolesDomain = (state) => state.get('roles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Roles
 */

const makeSelectRoles = () => createSelector(
  selectRolesDomain,
  (substate) => substate.toJS()
);

export default makeSelectRoles;
export {
  selectRolesDomain,
};
