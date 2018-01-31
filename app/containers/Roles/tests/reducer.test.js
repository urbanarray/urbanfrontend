
import { fromJS } from 'immutable';
import rolesReducer from '../reducer';

describe('rolesReducer', () => {
  it('returns the initial state', () => {
    expect(rolesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
