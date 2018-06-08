import { createSelector } from 'reselect';

/**
 * Direct selector to the addExecution state domain
 */
const selectAddExecutionDomain = (state) => state.get('addExecution');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddExecution
 */

const makeSelectAddExecution = () => createSelector(
  selectAddExecutionDomain,
  (substate) => substate.toJS()
);


const makeSelectExecution = () => createSelector(
  selectAddExecutionDomain,
  (substate) => substate.get('add_execution')
);

export default makeSelectAddExecution;
export {
  selectAddExecutionDomain,
  makeSelectExecution
};
