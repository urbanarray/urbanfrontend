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

const makeSelectListExecutions = () => createSelector(
  selectListExecutionDomain,
  (substate) => substate.get('execution_list')
);


export default makeSelectListExecution;
export {
  selectListExecutionDomain,
  makeSelectListExecution,
  makeSelectListExecutions
};
