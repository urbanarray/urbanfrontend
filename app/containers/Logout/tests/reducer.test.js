
import { fromJS } from 'immutable';
import logoutReducer from '../reducer';

describe('logoutReducer', () => {
  it('returns the initial state', () => {
    expect(logoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
