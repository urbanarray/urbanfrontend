import { createSelector } from 'reselect';

/**
 * Direct selector to the listResources state domain
 */
const selectListResourcesDomain = (state) => state.get('listResources');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListResources
 */

const makeSelectListResources = () => createSelector(
  selectListResourcesDomain,
  (substate) => substate.toJS()
);

const makeSelectProjectId = () => createSelector(
    selectListResourcesDomain,
    (substate) => substate.get('projectId')
  );


export default makeSelectListResources;
export {
  selectListResourcesDomain,
  makeSelectListResources,
  makeSelectProjectId
};
