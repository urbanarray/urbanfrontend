
import { fromJS } from 'immutable';
import addProjectReducer from '../reducer';

describe('addProjectReducer', () => {
  it('returns the initial state', () => {
    expect(addProjectReducer(undefined, {})).toEqual(fromJS({}));
  });
});
