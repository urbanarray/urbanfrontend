
import { fromJS } from 'immutable';
import accountSettingsReducer from '../reducer';

describe('accountSettingsReducer', () => {
  it('returns the initial state', () => {
    expect(accountSettingsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
