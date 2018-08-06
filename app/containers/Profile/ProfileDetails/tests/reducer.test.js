
import { fromJS } from 'immutable';
import profileDetailsReducer from '../reducer';

describe('profileDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(profileDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
