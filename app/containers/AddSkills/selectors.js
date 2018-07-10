import { createSelector } from 'reselect';

/**
 * Direct selector to the addSkills state domain
 */
const selectAddSkillsDomain = (state) => state.get('addSkills');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddSkills
 */

const makeSelectAddSkills = () => createSelector(
  selectAddSkillsDomain,
  (substate) => substate.toJS()
);
const makeSelectSkill = () => createSelector(
  selectAddSkillsDomain,
  (substate) => substate.get('skill')
);

export default makeSelectAddSkills;
export {
  selectAddSkillsDomain,
  makeSelectSkill,
};
