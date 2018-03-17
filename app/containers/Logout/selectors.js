import { createSelector } from 'reselect';

/**
 * Direct selector to the logout state domain
 */
const selectLogoutDomain = (state) => state.get('logout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Logout
 */

const makeSelectLogout = () => createSelector(
  selectLogoutDomain,
  (substate) => substate.toJS()
);

export default makeSelectLogout;
export {
  selectLogoutDomain,
};
