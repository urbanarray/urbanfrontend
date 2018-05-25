/*
 *
 * ProjectView actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}


export function viewProject(payload) {

  return {
    type: c.PROJECT_VIEW_ACTION,
    payload
  };

}

export function viewedProject(payload) {

    return {
      type: c.PROJECT_VIEWED_ACTION,
      payload
    }

}

