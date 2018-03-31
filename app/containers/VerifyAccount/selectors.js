import { createSelector } from 'reselect';

/**
 * Direct selector to the verifyAccount state domain
 */
const selectVerifyAccountDomain = (state) => state.get('verifyAccount');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VerifyAccount
 */

const makeSelectVerifyAccount = () => createSelector(
  selectVerifyAccountDomain,
  (substate) => substate.toJS()
);

const makeSelectUserId = () => createSelector(
  selectVerifyAccountDomain,
  (substate) => substate.get('userId')
);

export default makeSelectVerifyAccount;
export {
  selectVerifyAccountDomain,
  makeSelectUserId,
};
