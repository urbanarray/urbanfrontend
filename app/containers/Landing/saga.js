// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import { SUBMIT_CODE_ACTION } from './constants';
import { submitedCodeAction, errorsAction } from './actions';
import { selectLandingDomain, makeSelectLanding, makeSelectSubmitCode } from './selectors';
import { submitCodeApi } from './api';
import { login as loginGLobal } from 'containers/App/actions';
import { saveState } from 'utils/persistState';
import { setToken } from 'utils/axios';


// Individual exports for testing
export function* create() {
	try{

		const passphrase = yield select(makeSelectSubmitCode());
		const response = yield call(submitCodeApi, {passphrase});
		const { profile, user, token } = response.data;
		const access_token = token.accessToken;
		const refresh_token = token.refreshToken;
		
		const loginInfo = fromJS({ user, profile, access_token, refresh_token });

		setToken(access_token);
		saveState(loginInfo);

		yield put(submitedCodeAction(response.data));
		yield put(loginGLobal(loginInfo));


	} catch(error) {
		const errors_array = [];
		if (error.response && error.response.data && error.response.data.errors) {
			const errors = error.response.data.errors;
			errors.map(error => {
				const error_object = {field: error.field, message: error.messages[0]};
				errors_array.push(error_object);
			});

			yield put(errorsAction(errors_array));
		}
		
		else if (error.response && error.response.data && error.response.data.status == 0 && error.response.data.message) {
			const error_object = {field:'passphrase', message: error.response.data.message};
			errors_array.push(error_object);
			yield put(errorsAction(errors_array));
		}
	

	}
}

export default function* defaultSaga(){

	yield takeLatest(SUBMIT_CODE_ACTION, create);
}