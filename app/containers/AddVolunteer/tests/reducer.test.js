
import { fromJS } from 'immutable';
import addVolunteerReducer from '../reducer';

describe('addVolunteerReducer', () => {
  it('returns the initial state', () => {
    expect(addVolunteerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
