
import { fromJS } from 'immutable';
import placesReducer from '../reducer';

describe('placesReducer', () => {
  it('returns the initial state', () => {
    expect(placesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
