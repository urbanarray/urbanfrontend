/**
 *
 * Asynchronously loads the component for AcceptInvitation
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
