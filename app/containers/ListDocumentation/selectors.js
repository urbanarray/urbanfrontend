import { createSelector } from 'reselect';

/**
 * Direct selector to the listDocumentation state domain
 */
const selectListDocumentationDomain = (state) => state.get('listDocumentation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ListDocumentation
 */

const makeSelectListDocumentation = () => createSelector(
  selectListDocumentationDomain,
  (substate) => substate.toJS()
);


const makeSelectListDocument = () => createSelector(
  selectListDocumentationDomain,
  (substate) => substate.get('list_document')
);
	
export default makeSelectListDocumentation;
export {
  selectListDocumentationDomain,
  makeSelectListDocument,
  makeSelectListDocumentation,
};
