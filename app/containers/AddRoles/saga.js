import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_ROLES_ACTION, LIST_ROLES_ACTION } from "./constants";
import { createdRolesAction, listedRolesAction } from "./actions";
import { makeSelectRole } from "./selectors";
import { createRoleApi, listRolesApi } from "./api";


export function* create() {
  try {
    const role = yield select(makeSelectRole());
    const response = yield call(createRoleApi, role);
    yield put(createdRolesAction(response.data));
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
  yield takeLatest(CREATE_ROLES_ACTION, create);
  yield takeLatest(LIST_ROLES_ACTION, index);
  // See example in containers/HomePage/saga.js
}
