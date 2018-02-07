
import { fromJS } from 'immutable';
import projectViewReducer from '../reducer';

describe('projectViewReducer', () => {
  it('returns the initial state', () => {
    expect(projectViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
