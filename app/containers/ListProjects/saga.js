import {takeLatest, call, put, select} from 'redux-saga/effects';
import {LIST_PROJECTS_ACTION, UPDATE_PROJECT_ACTION, DELETE_PROJECT_ACTION,LIST_PLACES_ACTION,LISTED_PLACES_ACTION, SET_PAGINATION, GET_PAGINATION} from "./constants";
import {listProjectsApi, updateProjectApi, deleteProjectApi, listPlacesApi} from "./api";
import {listedProjectsAction, updatedAction, deletedAction, listedPlacesAction} from "./actions";
import makeSelectListProjects, {makeSelectUpdateProject, makeSelectProjectId, makeSelectPlaces}
from "./selectors";


export function* listProjects() {
  try {
    const { pagination } = yield select(makeSelectListProjects());
    const response = yield call(listProjectsApi, pagination);
    yield put(listedProjectsAction(response.data.project));
  } catch (error) {
    alert('Got Error.')
  }

}

export function* update(params) {
  
  const projectDetails = yield select(makeSelectUpdateProject());
  const response = yield call(updateProjectApi, projectDetails);
  

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

export function* listPlaces() {
  try {
    
    const listPlaces = yield select(makeSelectPlaces());
    const response = yield call(listPlacesApi, listPlaces);
    // console.log(response);
    yield put(listedPlacesAction(response.data.places));
 
  } catch (error) {
    console.log('error');
  }


}




// Individual exports for testing
export default function* defaultSaga() {

  yield takeLatest(LIST_PROJECTS_ACTION, listProjects);
  yield takeLatest(LIST_PLACES_ACTION, listPlaces);
  yield takeLatest(UPDATE_PROJECT_ACTION, update);
  yield takeLatest(DELETE_PROJECT_ACTION, deleteProject);
  yield takeLatest(GET_PAGINATION, listProjects);
  // See example in containers/HomePage/saga.js
}
