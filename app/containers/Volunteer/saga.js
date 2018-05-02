import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  LIST_VOLUNTEER_ACTION,
} from "./constants";
import {
  listedVolunteerAction,
} from "./actions";
import { listVolunteersApi } from "./api";


export function* listVolunteers() {
  try {
    const response = yield call(listVolunteersApi, {});
    yield put(listedVolunteerAction(response.data.user));
  } catch (error) {
    alert('Got Error.')
  }

}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LIST_VOLUNTEER_ACTION, listVolunteers);
  // See example in containers/HomePage/saga.js
}
