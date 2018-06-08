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

const makeSelectDocument = () => createSelector(
  selectDocumentationDomain,
  (substate) => substate.get('create_document')
);

export default makeSelectDocumentation;
export {
  selectDocumentationDomain,
  makeSelectDocument
};
