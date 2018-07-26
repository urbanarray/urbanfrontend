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

const makeSelectEmail = () => createSelector(
  selectVolunteerDomain,
  (substate) => substate.get('resend_email')
);

export default makeSelectVolunteer;
export {
  selectVolunteerDomain,
  makeSelectEmail,
};
