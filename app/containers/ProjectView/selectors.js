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

const projectId = () => createSelector(
  selectProjectViewDomain,
  (substate) => substate.get('id')
)

const listCommunications = () => createSelector(
  selectProjectViewDomain,
  (substate) => substate.get('communication_list')
)



export default makeSelectProjectView;
export {
  selectProjectViewDomain,
  projectId,
  listCommunications
};
