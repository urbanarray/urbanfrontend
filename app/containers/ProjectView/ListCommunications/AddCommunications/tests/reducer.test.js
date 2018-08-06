
import { fromJS } from 'immutable';
import addCommunicationsReducer from '../reducer';

describe('addCommunicationsReducer', () => {
  it('returns the initial state', () => {
    expect(addCommunicationsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
