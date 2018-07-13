
import { fromJS } from 'immutable';
import listExecutionReducer from '../reducer';

describe('listExecutionReducer', () => {
  it('returns the initial state', () => {
    expect(listExecutionReducer(undefined, {})).toEqual(fromJS({}));
  });
});
