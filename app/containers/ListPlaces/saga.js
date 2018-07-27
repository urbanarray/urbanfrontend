import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LIST_PLACES_ACTION, LISTED_PLACES_ACTION, DELETE_PLACES_ACTION, DELETED_PLACES_ACTION, UPDATE_PLACES_ACTION, UPDATED_PLACES_ACTION } from './constants';
import { listedPlacesAction, listPlacesAction, deletePlacesAction, deletedPlacesAction, updatePlacesAction, updatedPlacesAction } from './actions';
import { listPlacesApi, deletePlaceApi, updatePlacesApi } from './api.js';
import { makeSelectDelete, makeSelectUpdate } from './selectors';


export function* listPlaces() {

  try {
    const response = yield call(listPlacesApi, {});
    yield put(listedPlacesAction(response.data.places))

  } catch (error) {
    alert(error)
  }

}

export function* deletePlaces() {

  try {

    const deleteId = yield select(makeSelectDelete());
    const response = yield call(deletePlaceApi, deleteId);
    console.log(response);
    yield put(deletedPlacesAction(response.data))
    yield listPlaces();
  } catch (error) {
    console.log(error);
  }

}

export function* updatePlaces(params) {

  try {

    const updatePlc = yield select(makeSelectUpdate());
    console.log(updatePlc + "Update Pic");
    const response = yield call(updatePlacesApi, updatePlc);
    console.log(response + "REsponse Data");
    yield put(updatedPlacesAction(response.data.place))
    yield listPlaces();

  } catch (error) {
    console.log(error);
  }

}



// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LIST_PLACES_ACTION, listPlaces);
  yield takeLatest(DELETE_PLACES_ACTION, deletePlaces);
  yield takeLatest(UPDATE_PLACES_ACTION, updatePlaces);
  // See example in containers/HomePage/saga.js
}
