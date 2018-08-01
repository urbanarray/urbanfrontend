
import { fromJS } from 'immutable';
import listTeamDisplayReducer from '../reducer';

describe('listTeamDisplayReducer', () => {
  it('returns the initial state', () => {
    expect(listTeamDisplayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
