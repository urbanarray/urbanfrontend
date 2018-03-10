import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain,
  (substate) => substate.toJS()
);

const makeSelectSocialSignup = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get("socialSignup")
);

const makeSelectLinkedinSignup = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get("linkedinSignup")
);

const makeSelectLoginCredentials = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get("login")
);


export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectSocialSignup,
  makeSelectLinkedinSignup,
  makeSelectLoginCredentials,
};
