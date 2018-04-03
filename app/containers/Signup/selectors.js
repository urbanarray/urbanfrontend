import { createSelector } from 'reselect';

/**
 * Direct selector to the signup state domain
 */
const selectSignupDomain = (state) => state.get('signup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Signup
 */

const makeSelectSignup = () => createSelector(
  selectSignupDomain,
  (substate) => substate.toJS()
);

const makeSelectSocialSignup = () => createSelector(
  selectSignupDomain,
  (substate) => substate.get("socialSignup")
);

const makeSelectCustomSignup = () => createSelector(
  selectSignupDomain,
  (substate) => substate.get("signup")
);

const makeSelectLinkedinSignup = () => createSelector(
  selectSignupDomain,
  
  (substate) => substate.get("linkedinSignup")
);

export default makeSelectSignup;
export {
  selectSignupDomain,
  makeSelectSocialSignup,
  makeSelectCustomSignup,
  makeSelectLinkedinSignup,
};
