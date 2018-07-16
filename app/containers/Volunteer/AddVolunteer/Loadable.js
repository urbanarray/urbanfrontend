/**
 *
 * Asynchronously loads the component for AddVolunteer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
