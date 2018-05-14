/**
 *
 * Asynchronously loads the component for AddProject
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
