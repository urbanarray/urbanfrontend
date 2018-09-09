// not used
// 
// import { takeLatest, call, put, select } from 'redux-saga/effects';
// import { LIST_COMMUNICATION_ACTION } from './constants';
// import { listedCommunication } from './actions';
// import { listCommunications } from './selectors';
// import { listCommunicationApi } from './api';
//
//
// export function * listCommunication() {
//   try {
//
//     const communicationList = yield select(listCommunications());
//     // console.log(communicationList);
//
//     const response = yield call(listCommunicationApi, communicationList);
//
//     yield put(listedCommunication(response.data.communication));
//
//   } catch (error) {
//     console.log(error)
//   }
// }
//
// // Individual exports for testing
// export default function* defaultSaga() {
//   yield takeLatest(LIST_COMMUNICATION_ACTION, listCommunication);
// }
