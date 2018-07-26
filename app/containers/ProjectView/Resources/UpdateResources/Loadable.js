/**
 *
 * Asynchronously loads the component for UpdateResources
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
