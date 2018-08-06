
import { fromJS } from 'immutable';
import updateResourcesReducer from '../reducer';

describe('updateResourcesReducer', () => {
  it('returns the initial state', () => {
    expect(updateResourcesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
