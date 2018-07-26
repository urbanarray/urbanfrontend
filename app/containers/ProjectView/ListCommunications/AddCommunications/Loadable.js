/**
 *
 * Asynchronously loads the component for AddCommunications
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
