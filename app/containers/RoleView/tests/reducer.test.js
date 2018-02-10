
import { fromJS } from 'immutable';
import roleViewReducer from '../reducer';

describe('roleViewReducer', () => {
  it('returns the initial state', () => {
    expect(roleViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
