
import { fromJS } from 'immutable';
import yourRoleReducer from '../reducer';

describe('yourRoleReducer', () => {
  it('returns the initial state', () => {
    expect(yourRoleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
