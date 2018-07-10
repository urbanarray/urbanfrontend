import { createSelector } from 'reselect';

/**
 * Direct selector to the listHealthSafety state domain
 */
const selectListHealthSafetyDomain = (state) => state.get('listHealthSafety');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListHealthSafety
 */

const makeSelectListHealthSafety = () => createSelector(
  selectListHealthSafetyDomain,
  (substate) => substate.toJS()
);

const makeSelectListHealth = () => createSelector(
  selectListHealthSafetyDomain,
  (substate) => substate.get('list_healthsafety')
);

export default makeSelectListHealthSafety;
export {
  selectListHealthSafetyDomain,
  makeSelectListHealthSafety,
  makeSelectListHealth
};
