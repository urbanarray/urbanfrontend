import { createSelector } from 'reselect';

/**
 * Direct selector to the addPlace state domain
 */
const selectAddPlaceDomain = (state) => state.get('addPlace');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddPlace
 */
const makeSelectAddPlace = () => createSelector(
  selectAddPlaceDomain,
  (substate) => substate.toJS()
);


const makeSelectPlace = () => createSelector(
  selectAddPlaceDomain,
  (substate) => substate.toJS('addPlace')
);

export default makeSelectAddPlace;
export {
  selectAddPlaceDomain,
  makeSelectPlace
};
