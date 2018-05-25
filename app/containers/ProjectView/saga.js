import { takeLatest, call, put, select } from 'redux-saga/effects';
import { projectView } from './api';
import { projectId } from './selectors';
import * as c from './constants';
import { viewedProject } from './actions';


export function* index() {
  try {
    const id = yield select(projectId());
    
    const response = yield call(projectView, id);
    yield put(viewedProject(response.data.project));
  } catch (error) {
    console.log(error)
  }
}


// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(c.PROJECT_VIEW_ACTION, index)
}
