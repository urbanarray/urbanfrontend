
/*
 *
 * LandingForm actions
 *
 */


import { 

	DEFAULT_ACTION,
	
	SUBMIT_CODE_ACTION,
	SUBMITED_CODE_ACTION

} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitCodeAction(payload) {
	return {
		type: SUBMIT_CODE_ACTION,
		payload,
	}
}

export function submitedCodeAction() {
	return {

		type: SUBMITED_CODE_ACTION,
	}

}

