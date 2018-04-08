/**
 *
 * Asynchronously loads the component for ResetPassword
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
