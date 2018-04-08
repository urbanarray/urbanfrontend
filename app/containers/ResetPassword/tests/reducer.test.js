
import { fromJS } from 'immutable';
import resetPasswordReducer from '../reducer';

describe('resetPasswordReducer', () => {
  it('returns the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
