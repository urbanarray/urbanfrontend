
import { fromJS } from 'immutable';
import resourcesReducer from '../reducer';

describe('resourcesReducer', () => {
  it('returns the initial state', () => {
    expect(resourcesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
