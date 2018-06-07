/**
 *
 * Asynchronously loads the component for Documentation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
