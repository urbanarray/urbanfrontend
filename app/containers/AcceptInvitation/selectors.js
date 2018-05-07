import { createSelector } from 'reselect';

/**
 * Direct selector to the acceptInvitation state domain
 */
const selectAcceptInvitationDomain = (state) => state.get('acceptInvitation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AcceptInvitation
 */

const makeSelectAcceptInvitation = () => createSelector(
  selectAcceptInvitationDomain,
  (substate) => substate.toJS()
);

const makeSelectUserId = () => createSelector(
  selectAcceptInvitationDomain,
  (substate) => substate.get('userId')
);

const makeSelectUserData = () => createSelector(
  selectAcceptInvitationDomain,
  (substate) => substate.get('user_data')
);


export default makeSelectAcceptInvitation;
export {
  selectAcceptInvitationDomain,
  makeSelectUserId,
  makeSelectUserData,
};
