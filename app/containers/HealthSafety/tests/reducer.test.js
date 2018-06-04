
import { fromJS } from 'immutable';
import healthSafetyReducer from '../reducer';

describe('healthSafetyReducer', () => {
  it('returns the initial state', () => {
    expect(healthSafetyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
