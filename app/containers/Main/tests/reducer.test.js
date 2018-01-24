
import { fromJS } from 'immutable';
import mainReducer from '../reducer';

describe('mainReducer', () => {
  it('returns the initial state', () => {
    expect(mainReducer(undefined, {})).toEqual(fromJS({}));
  });
});
