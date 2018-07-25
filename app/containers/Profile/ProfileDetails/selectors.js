import { createSelector } from 'reselect';

/**
 * Direct selector to the profileDetails state domain
 */
const selectProfileDetailsDomain = (state) => state.get('profileDetails');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileDetails
 */

const makeSelectProfileDetails = () => createSelector(
  selectProfileDetailsDomain,
  (substate) => substate.toJS()
);

const makeSelectUpdateProfile = () => createSelector(
  selectProfileDetailsDomain,
  (substate) => substate.get('profileDetails')
);

export default makeSelectProfileDetails;
export {
  selectProfileDetailsDomain,
  makeSelectUpdateProfile,

};
