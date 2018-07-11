/**
 *
 * Asynchronously loads the component for AddSkills
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
