/**
 *
 * Asynchronously loads the component for AccountSettings
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
