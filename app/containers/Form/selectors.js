import { createSelector } from 'reselect';

/**
 * Direct selector to the form state domain
 */
const selectFormDomain = (state) => state.get('form');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Form
 */

const makeSelectForm = () => createSelector(
  selectFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectForm;
export {
  selectFormDomain,
};
