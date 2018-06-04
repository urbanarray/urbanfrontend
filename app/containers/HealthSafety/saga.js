import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_HEALTHSAFETY_ACTION } from "./constants";
import { createdHealthSafetyAction } from "./actions";
import { makeSelectHealth } from "./selectors";
import {healthAPI} from "./api";


export function* create() {
  try {

    const health = yield select(makeSelectHealth());
    const response = yield call(healthAPI, health);
    yield put(createdHealthSafetyAction(response.data));

  } catch (error) {
    console.log(error)
  }
}



// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_HEALTHSAFETY_ACTION, create)
}
