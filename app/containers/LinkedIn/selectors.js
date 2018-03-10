import { createSelector } from 'reselect';

/**
 * Direct selector to the linkedIn state domain
 */
const selectLinkedInDomain = (state) => state.get('linkedIn');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkedIn
 */

const makeSelectLinkedIn = () => createSelector(
  selectLinkedInDomain,
  (substate) => substate.toJS()
);

export default makeSelectLinkedIn;
export {
  selectLinkedInDomain,
};
