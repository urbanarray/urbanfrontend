// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LIST_EXECUTION_ACTION } from './constants';
import { listedExecutionAction } from './actions';
import { makeSelectListExecutions } from './selectors';
import { listExecutionApi }  from './api';



export function* listExecution() {

  try {

    const listExecution = yield select(makeSelectListExecutions());

    const response = yield call(listExecutionApi, listExecution);
    yield put(listedExecutionAction(response.data.execution));


  } catch (error) {
    console.log(error)
  }
}

// Individual exports for testing

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_EXECUTION_ACTION, listExecution);
}
