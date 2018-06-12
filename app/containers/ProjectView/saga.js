import { takeLatest, call, put, select } from 'redux-saga/effects';
import {projectView, listCommunicationApi} from './api';
import { projectId, listCommunications} from './selectors';
import * as c from './constants';
import { viewedProject, listedCommunication } from './actions';


export function* index() {
  try {
    const id = yield select(projectId());
    
    const response = yield call(projectView, id);
    yield put(viewedProject(response.data.project));
  } catch (error) {
    console.log(error)
  }
}



export default function* defaultSaga() {
  yield takeLatest(c.PROJECT_VIEW_ACTION, index)
}
