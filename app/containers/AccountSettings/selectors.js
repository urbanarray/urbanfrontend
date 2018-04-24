import { createSelector } from 'reselect';

/**
 * Direct selector to the accountSettings state domain
 */
const selectAccountSettingsDomain = (state) => state.get('accountSettings');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AccountSettings
 */

const makeSelectAccountSettings = () => createSelector(
  selectAccountSettingsDomain,
  (substate) => substate.toJS()
);

const makeSelectaddUserSkills = () => createSelector(
  selectAccountSettingsDomain,
  (substate) => substate.toJS()
);

export default makeSelectAccountSettings;
export {
  selectAccountSettingsDomain,
};
