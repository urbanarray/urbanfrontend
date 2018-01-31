
import { fromJS } from 'immutable';
import neededResourcesReducer from '../reducer';

describe('neededResourcesReducer', () => {
  it('returns the initial state', () => {
    expect(neededResourcesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
