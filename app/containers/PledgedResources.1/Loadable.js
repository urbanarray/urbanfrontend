/**
 *
 * Asynchronously loads the component for PledgedResources
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
