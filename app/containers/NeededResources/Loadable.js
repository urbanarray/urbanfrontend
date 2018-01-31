/**
 *
 * Asynchronously loads the component for NeededResources
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
