import { createSelector } from 'reselect';

/**
 * Direct selector to the listTeamDisplay state domain
 */
const selectListTeamDisplayDomain = (state) => state.get('listTeamDisplay');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListTeamDisplay
 */

const makeSelectListTeamDisplay = () => createSelector(
  selectListTeamDisplayDomain,
  (substate) => substate.toJS()
);

export default makeSelectListTeamDisplay;
export {
  selectListTeamDisplayDomain,
};
