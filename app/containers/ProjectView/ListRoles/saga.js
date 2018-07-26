// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_ROLES_ACTION, LIST_ROLES_ACTION } from "./constants";
import { createdRolesAction, listedRolesAction } from "./actions";
import { makeSelectRole } from "./selectors";
// import { createRoleApi, listRolesApi } from "./api";


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}

export function* index() {
  try {

    const response = yield call(listRolesApi);
    yield put(listedRolesAction(response.data.role));

  } catch (error) {
    console.log(error)
  }
}