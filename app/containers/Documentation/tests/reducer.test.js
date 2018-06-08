
import { fromJS } from 'immutable';
import documentationReducer from '../reducer';

describe('documentationReducer', () => {
  it('returns the initial state', () => {
    expect(documentationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
