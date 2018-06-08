
import { fromJS } from 'immutable';
import addExecutionReducer from '../reducer';

describe('addExecutionReducer', () => {
  it('returns the initial state', () => {
    expect(addExecutionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
