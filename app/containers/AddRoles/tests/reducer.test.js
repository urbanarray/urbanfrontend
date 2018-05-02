
import { fromJS } from 'immutable';
import addRolesReducer from '../reducer';

describe('addRolesReducer', () => {
  it('returns the initial state', () => {
    expect(addRolesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
