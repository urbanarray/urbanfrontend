
import { fromJS } from 'immutable';
import listResourcesReducer from '../reducer';

describe('listResourcesReducer', () => {
  it('returns the initial state', () => {
    expect(listResourcesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
