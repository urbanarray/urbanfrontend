/**
 *
 * Asynchronously loads the component for AddRoles
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
