/**
 *
 * Asynchronously loads the component for HealthSafety
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
