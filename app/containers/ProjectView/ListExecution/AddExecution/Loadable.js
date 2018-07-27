/**
 *
 * Asynchronously loads the component for AddExecution
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
