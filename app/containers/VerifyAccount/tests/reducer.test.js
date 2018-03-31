
import { fromJS } from 'immutable';
import verifyAccountReducer from '../reducer';

describe('verifyAccountReducer', () => {
  it('returns the initial state', () => {
    expect(verifyAccountReducer(undefined, {})).toEqual(fromJS({}));
  });
});
