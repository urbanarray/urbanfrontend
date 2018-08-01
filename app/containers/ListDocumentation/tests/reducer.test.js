
import { fromJS } from 'immutable';
import listDocumentationReducer from '../reducer';

describe('listDocumentationReducer', () => {
  it('returns the initial state', () => {
    expect(listDocumentationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
