// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import { SUBMIT_CODE_ACTION } from "./constants";
import { submitCodeAction} from "./actions";
import { selectLandingDomain, makeSelectLanding, makeSelectSubmitCode } from "./selectors";
import { submitCodeApi } from "./api"



// Individual exports for testing
export function* create() {
	try{

		const submitCode = yield select(makeSelectSubmitCode());
		console.log(submitCode)
		const response = yield call(submitCodeApi, submitCode);
		yield put(submitCodeAction(response.data.submitCode));

	} catch(error) {

		console.log(error)

	}
}

export default function* defaultSaga(){

	yield takeLatest(SUBMIT_CODE_ACTION, create);
}