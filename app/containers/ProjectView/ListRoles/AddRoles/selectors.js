import { createSelector } from 'reselect';

/**
 * Direct selector to the addRoles state domain
 */
const selectAddRolesDomain = (state) => state.get('addRoles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddRoles
 */

const makeSelectAddRoles = () => createSelector(
  selectAddRolesDomain,
  (substate) => substate.toJS()
);

const makeSelectRole = () => createSelector(
  selectAddRolesDomain,
  (substate) => substate.get('role')
);

export default makeSelectAddRoles;
export {
  selectAddRolesDomain,
  makeSelectRole,
};
