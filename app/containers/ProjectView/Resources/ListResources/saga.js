// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import { ADD_RESOURCES_ACTION, LIST_PLACES_ACTION, LIST_RESOURCES_ACTION } from './constants';
import { addedResourcesAction, listedPlacesAction, listedResourcesAction } from './actions';
import { makeSelectResources, makeSelectListPlaces, makeSelectProjectId } from './selectors';
import { addResourcesApi, listPlacesApi, listResourcesApi } from './api';


export function* listResources(){
	
	try{

		const listedResources = yield select(makeSelectProjectId());
		const response = yield call(listResourcesApi, listedResources);
		yield put(listedResourcesAction(response.data.resources));

	}catch(error){
		console.log(error)
	}
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LIST_RESOURCES_ACTION, listResources);

}
