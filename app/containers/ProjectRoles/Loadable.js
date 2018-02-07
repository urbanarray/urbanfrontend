/**
 *
 * Asynchronously loads the component for ProjectRoles
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
