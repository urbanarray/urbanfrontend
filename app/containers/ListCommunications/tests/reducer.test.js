
import { fromJS } from 'immutable';
import listCommunicationsReducer from '../reducer';

describe('listCommunicationsReducer', () => {
  it('returns the initial state', () => {
    expect(listCommunicationsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
