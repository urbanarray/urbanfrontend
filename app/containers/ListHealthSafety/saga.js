import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LIST_HEALTHSAFETY_ACTION } from "./constants";
import { listedHealthSafetyAction } from "./actions";
import { makeSelectListHealth } from "./selectors";
import { listHealthApi } from "./api";


export function* listHealthSafety() {

    try {

      const listhealth = yield select(makeSelectListHealth());
      console.log(listhealth)
      const response = yield call(listHealthApi, listhealth);
      yield put(listedHealthSafetyAction(response.data));
    } catch (error) {
      console.log(error);
    }


}
// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LIST_HEALTHSAFETY_ACTION, listHealthSafety)
}
