import { createSelector } from 'reselect';

/**
 * Direct selector to the documentation state domain
 */
const selectDocumentationDomain = (state) => state.get('documentation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Documentation
 */

const makeSelectDocumentation = () => createSelector(
  selectDocumentationDomain,
  (substate) => substate.toJS()
);

export default makeSelectDocumentation;
export {
  selectDocumentationDomain,
};
