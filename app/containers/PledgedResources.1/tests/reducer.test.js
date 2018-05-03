
import { fromJS } from 'immutable';
import pledgedResourcesReducer from '../reducer';

describe('pledgedResourcesReducer', () => {
  it('returns the initial state', () => {
    expect(pledgedResourcesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
