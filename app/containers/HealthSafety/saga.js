import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_HEALTHSAFETY_ACTION, LIST_HEALTHSAFETY_ACTION } from "./constants";
import { createdHealthSafetyAction, listedHealthSafetyAction } from "./actions";
import { makeSelectHealth, makeSelectListHealth } from "./selectors";
import {healthAPI, listHealthApi} from "./api";


export function* create() {
  try {

    const health = yield select(makeSelectHealth());
    
    const response = yield call(healthAPI, health);
    yield put(createdHealthSafetyAction(response.data.healthSafety));

  } catch (error) {
    console.log(error)
  }
}


export function* listHealthSafety() {

    try {
      const listhealth = yield select(makeSelectListHealth());
      const response = yield call(listHealthApi, listhealth);
      yield put(listedHealthSafetyAction(response.data));
    } catch (error) {
      console.log(error);
    }


}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_HEALTHSAFETY_ACTION, create)
  yield takeLatest(LIST_HEALTHSAFETY_ACTION, listHealthSafety)
}
