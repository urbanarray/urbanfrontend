import { createSelector } from 'reselect';

/**
 * Direct selector to the yourRole state domain
 */
const selectYourRoleDomain = (state) => state.get('yourRole');

/**
 * Other specific selectors
 */


/**
 * Default selector used by YourRole
 */

const makeSelectYourRole = () => createSelector(
  selectYourRoleDomain,
  (substate) => substate.toJS()
);

export default makeSelectYourRole;
export {
  selectYourRoleDomain,
};
