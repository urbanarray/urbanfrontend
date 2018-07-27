/**
 *
 * Asynchronously loads the component for ListRoles
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
