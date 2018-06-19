import {takeLatest, call, put, select} from 'redux-saga/effects';
import { CREATE_PlACE_ACTION } from "./constants";
import { createdPlaceAction } from "./actions";
import { makeSelectPlace } from "./selectors";
import { createPlaceApi } from "./api";
import { listPlaces } from 'containers/Places/saga';


export function* create() {
  try {
    const place = yield select(makeSelectPlace());
    const response = yield call(createPlaceApi, place.addPlace);
    yield put(createdPlaceAction(response.data));
    yield listPlaces();
  } catch (error) {
    console.log(error + "Trouble Here");
  }
  
}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_PlACE_ACTION, create);
  // See example in containers/HomePage/saga.js
}
