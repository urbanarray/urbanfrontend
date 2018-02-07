import { createSelector } from 'reselect';

/**
 * Direct selector to the projectView state domain
 */
const selectProjectViewDomain = (state) => state.get('projectView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProjectView
 */

const makeSelectProjectView = () => createSelector(
  selectProjectViewDomain,
  (substate) => substate.toJS()
);

export default makeSelectProjectView;
export {
  selectProjectViewDomain,
};
