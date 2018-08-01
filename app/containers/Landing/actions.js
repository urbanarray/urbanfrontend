
/*
 *
 * LandingForm actions
 *
 */


import { 

	DEFAULT_ACTION,
	SUBMIT_CODE_ACTION,
	SUBMITED_CODE_ACTION,
	SERVER_ERROR_ACTION,
	EMPTY_ERROR_ACTION,

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

export function submitedCodeAction(payload) {
	return {
		type: SUBMITED_CODE_ACTION,
		payload
	}

}


export function errorsAction(payload) {
	return {
		type: SERVER_ERROR_ACTION,
		payload
	}
}

export function emptyErrorsAction() {
	return {
		type: EMPTY_ERROR_ACTION
	}
}


