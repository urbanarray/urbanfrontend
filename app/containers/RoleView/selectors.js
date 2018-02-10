import { createSelector } from 'reselect';

/**
 * Direct selector to the roleView state domain
 */
const selectRoleViewDomain = (state) => state.get('roleView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RoleView
 */

const makeSelectRoleView = () => createSelector(
  selectRoleViewDomain,
  (substate) => substate.toJS()
);

export default makeSelectRoleView;
export {
  selectRoleViewDomain,
};
