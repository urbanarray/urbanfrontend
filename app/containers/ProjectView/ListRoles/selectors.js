import { createSelector } from 'reselect';

/**
 * Direct selector to the listRoles state domain
 */
const selectListRolesDomain = (state) => state.get('listRoles');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListRoles
 */

const makeSelectListRoles = () => createSelector(
  selectListRolesDomain,
  (substate) => substate.toJS()
);

export default makeSelectListRoles;
export {
  selectListRolesDomain,
};
