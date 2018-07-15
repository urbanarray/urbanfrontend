import { createSelector } from 'reselect';

/**
 * Direct selector to the neededResources state domain
 */
const selectNeededResourcesDomain = (state) => state.get('neededResources');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NeededResources
 */

const makeSelectNeededResources = () => createSelector(
  selectNeededResourcesDomain,
  (substate) => substate.toJS()
);

export default makeSelectNeededResources;
export {
  selectNeededResourcesDomain,
};
