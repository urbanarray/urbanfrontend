import { createSelector } from 'reselect';

/**
 * Direct selector to the userSkills state domain
 */
const selectUserSkillsDomain = (state) => state.get('userSkills');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserSkills
 */

const makeSelectUserSkills = () => createSelector(
  selectUserSkillsDomain,
  (substate) => substate.toJS()
);

export default makeSelectUserSkills;
export {
  selectUserSkillsDomain,
};
