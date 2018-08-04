import { submitSkillsApi } from './api';
import {takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectSelectSkills } from './selectors';
import { SUBMIT_SKILLS } from './constants';


export function* submitSkills() {
  try {
    const submitSkillsData = yield select(makeSelectSelectSkills());

    const response = yield call(submitSkillsApi, submitSkillsData);

    yield put(submitSkillsAction(response.data));
  } catch(error) {
    console.log(error)
  }
}

export default function* defaultSaga() {
  yield takeLatest(SUBMIT_SKILLS, submitSkills);
}
