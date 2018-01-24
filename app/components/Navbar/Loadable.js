/**
 *
 * Asynchronously loads the component for Navbar
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
