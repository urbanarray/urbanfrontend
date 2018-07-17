import { createSelector } from 'reselect';

/**
 * Direct selector to the listExecution state domain
 */
const selectListExecutionDomain = (state) => state.get('listExecution');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListExecution
 */

const makeSelectListExecution = () => createSelector(
  selectListExecutionDomain,
  (substate) => substate.toJS()
);

const list_Executions = () => createSelector(
  selectListExecutionDomain,
  (substate) => substate.get('list_Execution')
);


export default makeSelectListExecution;
export {
  selectListExecutionDomain,
  makeSelectListExecution,
  list_Executions
};
