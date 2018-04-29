
import { fromJS } from 'immutable';
import volunteerReducer from '../reducer';

describe('volunteerReducer', () => {
  it('returns the initial state', () => {
    expect(volunteerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
