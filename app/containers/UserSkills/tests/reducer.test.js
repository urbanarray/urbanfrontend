
import { fromJS } from 'immutable';
import userSkillsReducer from '../reducer';

describe('userSkillsReducer', () => {
  it('returns the initial state', () => {
    expect(userSkillsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
