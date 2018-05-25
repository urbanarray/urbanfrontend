import {takeLatest, call, put, select} from 'redux-saga/effects';
import {ADD_PROJECT_ACTION, LIST_PLCACES_ACTION} from "./constants";
import {addedProjectAction, listedPlacesAction} from "./actions";
import {makeSelectAddPro, makeSelectListPlaces} from "./selectors";
import {addProjectApi, listProjectPlacesApi} from "./api";

export function * create() {
  try {
    const cproject = yield select(makeSelectAddPro());
    const response = yield call(addProjectApi, cproject);
    yield put(addedProjectAction(response.data));
  } catch (error) {
    console.log(error)
  }

}

export function* index() {

  try {
    const place = yield select(makeSelectListPlaces());
    const response = yield call(listProjectPlacesApi, place);

    yield put(listedPlacesAction(response.data));
    
  } catch (error) {
    console.log(error);
  }

}


// Individual exports for testing
export default function* defaultSaga() {
yield takeLatest(ADD_PROJECT_ACTION, create);
yield takeLatest(LIST_PLCACES_ACTION, index);
  // See example in containers/HomePage/saga.js
}
