import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_VOLUNTEER_ACTION , LIST_ROLES_ACTION } from "./constants";
import { createdAction , listedRolesAction } from "./actions";
import {makeSelectVolunteer} from "./selectors";
import { createVolunteerApi, listRolesApi } from "./api";


export function* create() {
  try {
    const role = yield select(makeSelectVolunteer());
    const response = yield call(createVolunteerApi, role);
    yield put(createdAction(response.data));
  } catch (error) {
    console.log(error)
  }

}

export function* index() {
  try {
    const response = yield call(listRolesApi);
    yield put(listedRolesAction(response.data.role));
  } catch (error) {
    console.log(error)
  }

}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LIST_ROLES_ACTION, index);
  yield takeLatest(CREATE_VOLUNTEER_ACTION, create);
  // See example in containers/HomePage/saga.js
}
