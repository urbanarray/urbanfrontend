import { createSelector } from 'reselect';

/**
 * Direct selector to the forgetPassword state domain
 */
const selectForgetPasswordDomain = (state) => state.get('forgetPassword');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForgetPassword
 */

const makeSelectForgetPassword = () => createSelector(
  selectForgetPasswordDomain,
  (substate) => substate.toJS()
);

const makeSelectEmail = () => createSelector(
  selectForgetPasswordDomain,
  (substate) => substate.get('email')
);

export default makeSelectForgetPassword;
export {
  selectForgetPasswordDomain,
  makeSelectEmail
};
