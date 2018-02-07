
import { fromJS } from 'immutable';
import projectRolesReducer from '../reducer';

describe('projectRolesReducer', () => {
  it('returns the initial state', () => {
    expect(projectRolesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
