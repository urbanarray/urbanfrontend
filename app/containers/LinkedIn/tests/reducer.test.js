
import { fromJS } from 'immutable';
import linkedInReducer from '../reducer';

describe('linkedInReducer', () => {
  it('returns the initial state', () => {
    expect(linkedInReducer(undefined, {})).toEqual(fromJS({}));
  });
});
