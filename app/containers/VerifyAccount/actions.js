/*
 *
 * VerifyAccount actions
 *
 */

import {
  DEFAULT_ACTION,
  VERIFIED_ACTION,
} from './constants';

export function defaultAction(payload) {
  return {
    type: DEFAULT_ACTION,
    payload
  };
}

export function verifiedAction(payload) {
  return {
    type: VERIFIED_ACTION,
    payload
  };
}

