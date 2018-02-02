import { createSelector } from 'reselect';

/**
 * Direct selector to the pledgedResources state domain
 */
const selectPledgedResourcesDomain = (state) => state.get('pledgedResources');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PledgedResources
 */

const makeSelectPledgedResources = () => createSelector(
  selectPledgedResourcesDomain,
  (substate) => substate.toJS()
);

export default makeSelectPledgedResources;
export {
  selectPledgedResourcesDomain,
};
