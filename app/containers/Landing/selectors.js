import { createSelector } from 'reselect';

/**
 * Direct selector to the Landing state domain
 */
const selectLandingDomain = (state) => state.get('landing');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Landing
 */

const makeSelectLanding = () => createSelector(
  	selectLandingDomain,
	(substate) => substate.toJS()
);


const makeSelectSubmitCode = () => createSelector(
	selectLandingDomain,
	(substate) => substate.get('submitCode')

);


export default selectLandingDomain;

export {

	selectLandingDomain,
	makeSelectLanding,
	makeSelectSubmitCode

}