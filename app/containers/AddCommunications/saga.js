import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_COMMUNICATIONS_ACTION, LIST_COMMUNICATION_ACTION } from "./constants";
import { createdCommunicationsAction, listedCommunication} from "./actions";
import { makeSelectCreateCommunications, listCommunications } from "./selectors";
import {createCommunicationsApi, listCommunicationApi} from "./api";

export function* create() {
  try {

    const comm = yield select(makeSelectCreateCommunications());
    console.log(comm);
    const response = yield call(createCommunicationsApi, comm);
    console.log(response);
    yield put(createdCommunicationsAction(response.data));

  } catch (error) {
    console.log(error);
  }
}

export function * listCommunication() {
  try {

    const communicationLIst = yield select(listCommunications());
    const response = yield call(listCommunicationApi, communicationLIst);

    yield put(listedCommunication(response.data.communication));

  } catch (error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(CREATE_COMMUNICATIONS_ACTION, create);
  yield takeLatest(LIST_COMMUNICATION_ACTION, listCommunication)
}
