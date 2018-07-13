/**
 *
 * Asynchronously loads the component for ListResources
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
