import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_EXECUTION_ACTION, LIST_EXECUTION_ACTION } from './constants';
import { createdExecutionAction, listedExecutionAction } from './actions';
import { makeSelectExecution, makeSelectListExecution } from './selectors';
import { executionApi, listExecutionApi}  from './api';


export function* create() {

  try {

    const execution = yield select(makeSelectExecution());
    console.log(execution)
    const response = yield call(executionApi, execution);

    yield put(createdExecutionAction(response.data.executions));
    
  } catch (error) {
    console.log(error)
  }


}

export function* listExecution() {
  
  try {

    const listExecution = yield select(makeSelectListExecution());
    const response = yield call(listExecutionApi, listExecution);
    yield put(listedExecutionAction(response.data));


  } catch (error) {
    console.log(error)
  }
}




// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_EXECUTION_ACTION, create);
  yield takeLatest(LIST_EXECUTION_ACTION, listExecution);
  // See example in containers/HomePage/saga.js
}
