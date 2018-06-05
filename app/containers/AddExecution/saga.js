import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_EXECUTION_ACTION } from "./constants";
import { createdExecutionAction } from "./actions";
import { makeSelectExecution } from "./selectors";
import {executionApi}  from "./api";


export function* create() {

  try {

    const execution = yield select(makeSelectExecution());
    const response = yield call(executionApi, execution);
    yield put(createdExecutionAction(response.data.executions));
    
  } catch (error) {
    console.log(error)
  }


}




// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_EXECUTION_ACTION, create);
  // See example in containers/HomePage/saga.js
}
