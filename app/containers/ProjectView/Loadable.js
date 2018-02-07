/**
 *
 * Asynchronously loads the component for ProjectView
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
