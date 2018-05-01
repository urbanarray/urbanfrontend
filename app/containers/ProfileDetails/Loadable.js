/**
 *
 * Asynchronously loads the component for ProfileDetails
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
