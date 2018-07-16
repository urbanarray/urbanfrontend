
import { fromJS } from 'immutable';
import listRolesReducer from '../reducer';

describe('listRolesReducer', () => {
  it('returns the initial state', () => {
    expect(listRolesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
