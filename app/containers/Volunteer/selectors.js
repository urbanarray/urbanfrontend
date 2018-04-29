import { createSelector } from 'reselect';

/**
 * Direct selector to the volunteer state domain
 */
const selectVolunteerDomain = (state) => state.get('volunteer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Volunteer
 */

const makeSelectVolunteer = () => createSelector(
  selectVolunteerDomain,
  (substate) => substate.toJS()
);

export default makeSelectVolunteer;
export {
  selectVolunteerDomain,
};
