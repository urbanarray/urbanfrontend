
import { fromJS } from 'immutable';
import addSkillsReducer from '../reducer';

describe('addSkillsReducer', () => {
  it('returns the initial state', () => {
    expect(addSkillsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
