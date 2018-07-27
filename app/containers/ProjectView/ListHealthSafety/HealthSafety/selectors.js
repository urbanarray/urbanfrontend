import { createSelector } from 'reselect';

/**
 * Direct selector to the healthSafety state domain
 */
const selectHealthSafetyDomain = (state) => state.get('healthSafety');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HealthSafety
 */

const makeSelectHealthSafety = () => createSelector(
  selectHealthSafetyDomain,
  (substate) => substate.toJS()
);

const makeSelectHealth = () => createSelector(
  selectHealthSafetyDomain,
  (substate) => substate.get('add_healthsafety')
);

const makeSelectListHealth = () => createSelector(
  selectHealthSafetyDomain,
  (substate) => substate.get('list_healthsafety')
);

export default makeSelectHealthSafety;
export {
  selectHealthSafetyDomain,
  makeSelectHealth,
  makeSelectListHealth
};
