// NOT USED BUT CAUSES ERROR IF COMMENTED OUT 

import { createSelector } from 'reselect';

/**
 * Direct selector to the listCommunications state domain
 */
const selectListCommunicationsDomain = (state) => state.get('listCommunications');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListCommunications
 */

const makeSelectListCommunications = () => createSelector(
  selectListCommunicationsDomain,
  (substate) => substate.toJS()
);

const listCommunications = () => createSelector(
  selectListCommunicationsDomain,
  (substate) => substate.get('projectId')
);

export default makeSelectListCommunications;
export {
  selectListCommunicationsDomain,
  listCommunications
};
