/*
 *
 * ListExecution actions
 *
 */
import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function listExecutionAction(payload) {
  return {
    type: c.LIST_EXECUTION_ACTION,
    payload
  };
}

export function listedExecutionAction(payload) {
  return {
    type: c.LISTED_EXECUTION_ACTION,
    payload
  };
}
