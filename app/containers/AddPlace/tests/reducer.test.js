
import { fromJS } from 'immutable';
import addPlaceReducer from '../reducer';

describe('addPlaceReducer', () => {
  it('returns the initial state', () => {
    expect(addPlaceReducer(undefined, {})).toEqual(fromJS({}));
  });
});
