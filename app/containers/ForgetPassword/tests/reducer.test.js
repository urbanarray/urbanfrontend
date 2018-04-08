
import { fromJS } from 'immutable';
import forgetPasswordReducer from '../reducer';

describe('forgetPasswordReducer', () => {
  it('returns the initial state', () => {
    expect(forgetPasswordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
