
import { fromJS } from 'immutable';
import listProjectsReducer from '../reducer';

describe('listProjectsReducer', () => {
  it('returns the initial state', () => {
    expect(listProjectsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
