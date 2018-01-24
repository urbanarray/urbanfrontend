import { createSelector } from 'reselect';

/**
 * Direct selector to the main state domain
 */
const selectMainDomain = (state) => state.get('main');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Main
 */

const makeSelectMain = () => createSelector(
  selectMainDomain,
  (substate) => substate.toJS()
);

export default makeSelectMain;
export {
  selectMainDomain,
};
