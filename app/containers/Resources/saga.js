// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import { ADD_RESOURCES_ACTION, LIST_PLACES_ACTION, LIST_RESOURCES_ACTION } from './constants';
import { addedResourcesAction, listedPlacesAction, listedResourcesAction } from './actions';
import { makeSelectResources, makeSelectListPlaces, makeSelectProjectId } from './selectors';
import { addResourcesApi, listPlacesApi, listResourcesApi } from './api';



// Individual exports for testing
export function* create() {
	try{

		const { addResources } = yield select(makeSelectResources());
		const response = yield call(addResourcesApi,addResources);
		yield put(addedResourcesAction(response.data.listPlaces));

	} catch(error) {

		console.log(error)

	}
}

export function* listingPlaces() {
	try{

		const listPlaces = yield call(listPlacesApi);
		yield put(listedPlacesAction(listPlaces.data.places));




	} catch(error){
		console.log(error)
	}
}


export function* listResources(){
	
	try{

		const projectId = yield select(makeSelectProjectId());
		const response = yield call(listResourcesApi, projectId);
		// console.log(response)
		yield put(listedResourcesAction(response.data.resources));

	}catch(error){
		console.log(error)
	}
}



export default function* defaultSaga(){

	yield takeLatest(ADD_RESOURCES_ACTION, create);
	yield takeLatest(LIST_PLACES_ACTION, listingPlaces);
	yield takeLatest(LIST_RESOURCES_ACTION, listResources);
}