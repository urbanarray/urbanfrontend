/*
 *
 * AddExecution actions
 *
 */

import * as b from './constants';

export function defaultAction() {
  return {
    type: b.DEFAULT_ACTION,
  };
}

export function createExecutionAction(payload) {
  return {
    type: b.CREATE_EXECUTION_ACTION,
    payload
  };
}

export function createdExecutionAction(payload) {
  return {
    type: b.CREATED_EXECUTION_ACTION,
    payload
  };
}

export function listExecutionAction(payload) {
  return {
    type: b.LIST_EXECUTION_ACTION,
    payload
  };
}

export function listedExecutionAction(payload) {
  return {
    type: b.LISTED_EXECUTION_ACTION,
    payload
  };
}
