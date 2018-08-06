/**
 *
 * Asynchronously loads the component for ListCommunications
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
