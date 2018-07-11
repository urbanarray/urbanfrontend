
import { fromJS } from 'immutable';
import listHealthSafetyReducer from '../reducer';

describe('listHealthSafetyReducer', () => {
  it('returns the initial state', () => {
    expect(listHealthSafetyReducer(undefined, {})).toEqual(fromJS({}));
  });
});
