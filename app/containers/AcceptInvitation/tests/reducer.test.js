
import { fromJS } from 'immutable';
import acceptInvitationReducer from '../reducer';

describe('acceptInvitationReducer', () => {
  it('returns the initial state', () => {
    expect(acceptInvitationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
