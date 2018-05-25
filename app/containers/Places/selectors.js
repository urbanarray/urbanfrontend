import { createSelector } from 'reselect';

/**
 * Direct selector to the places state domain
 */
const selectPlacesDomain = (state) => state.get('places');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Places
 */

const makeSelectPlaces = () => createSelector(
  selectPlacesDomain,
  (substate) => substate.toJS()
);

const makeSelectDelete = () => createSelector(
  selectPlacesDomain,
  (substate) => substate.get('deletePlace')
);

const makeSelectUpdate = () => createSelector(
  selectPlacesDomain,
  (substate) => substate.get('updatePlace')
);

export default makeSelectPlaces;
export {
  selectPlacesDomain,
  makeSelectDelete,
  makeSelectUpdate
};
