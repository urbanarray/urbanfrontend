import { createSelector } from 'reselect';

/**
 * Direct selector to the addVolunteer state domain
 */
const selectAddVolunteerDomain = (state) => state.get('addVolunteer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddVolunteer
 */

const makeSelectAddVolunteer = () => createSelector(
  selectAddVolunteerDomain,
  (substate) => substate.toJS()
);

export default makeSelectAddVolunteer;
export {
  selectAddVolunteerDomain,
};
