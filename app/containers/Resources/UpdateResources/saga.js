// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put, select } from 'redux-saga/effects';

import {LIST_PLACES_ACTION} from './constants';
import {listedPlacesAction} from './actions';
import {makeSelectListedPlaces} from '../selectors';
import {listPlacesApi} from './api';



// Individual exports for testing
  // See example in containers/HomePage/saga.js





export function* listPlaces(){
	try{

		const listplaces = yield call(listPlacesApi)

	}catch(error){

		console.log(error)

	}
}


export default function* defaultSaga() {

	yield takeLatest(LIST_PLACES_ACTION, listPlaces);
}