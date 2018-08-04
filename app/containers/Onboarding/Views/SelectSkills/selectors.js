import { createSelector } from 'reselect';

const selectSkillSelectionDomain = (state) => state;

const makeSelectSelectSkills = () => createSelector(
  selectSkillSelectionDomain
  // (substate) => substate.toJS()
);

export default makeSelectSelectSkills;
export {
  selectSkillSelectionDomain,
};
