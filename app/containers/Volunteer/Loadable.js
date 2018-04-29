/**
 *
 * Asynchronously loads the component for Volunteer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
