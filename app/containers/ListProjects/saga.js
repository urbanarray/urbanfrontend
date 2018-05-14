import {takeLatest, call, put, select} from 'redux-saga/effects';
import {LIST_PROJECTS_ACTION, UPDATE_PROJECT_ACTION, DELETE_PROJECT_ACTION} from "./constants";
import {listProjectsApi, updateProjectApi, deleteProjectApi} from "./api";
import {listedProjectsAction, updatedAction, deletedAction} from "./actions";
import { makeSelectUpdateProject, makeSelectProjectId } from "./selectors";


export function* listProjects() {
  try {
    const response = yield call(listProjectsApi, {});
    // console.log(response); 
    yield put(listedProjectsAction(response.data.project));
  } catch (error) {
    alert('Got Error.')
  }

}

export function* update(params) {
  const projectDetails = yield select(makeSelectUpdateProject());
  const response = yield call(updateProjectApi, projectDetails);
  console.log(response);

  const project = response.data.project;
  yield put(updatedAction(response.data.project));


}


export function* deleteProject() {
  try {
    const projectId = yield select(makeSelectProjectId());
    const response = yield call(deleteProjectApi, projectId);
    yield put(deletedAction(response.data));
  } catch (error) {
    console.log(error)
    alert('Got Error.')
  }

}




// Individual exports for testing
export default function* defaultSaga() {

  yield takeLatest(LIST_PROJECTS_ACTION, listProjects);
  yield takeLatest(UPDATE_PROJECT_ACTION, update);
  yield takeLatest(DELETE_PROJECT_ACTION, deleteProject);
  // See example in containers/HomePage/saga.js
}
