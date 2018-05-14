import {takeLatest, call, put, select} from 'redux-saga/effects';
import {ADD_PROJECT_ACTION} from "./constants";
import {addedProjectAction} from "./actions";
import {makeSelectAddPro} from "./selectors";
import {addProjectApi} from "./api";

export function * create() {
  try {
    const cproject = yield select(makeSelectAddPro());
    const response = yield call(addProjectApi, cproject);
    yield put(addedProjectAction(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error)
  }

}


// Individual exports for testing
export default function* defaultSaga() {
yield takeLatest(ADD_PROJECT_ACTION, create);
  // See example in containers/HomePage/saga.js
}
