import { submitSkillsApi } from './api';
import {takeLatest, call, put, select } from 'redux-saga/effects';
import { makeSelectSelectSkills } from './selectors';
import { SUBMIT_SKILLS_ACTION } from './constants';


export default function* submitSkills() {
  try {
    const submitSkillsData = yield select(makeSelectSelectSkills());

    const response = yield call(submitSkillsApi, submitSkillsData);

    yield put(submitSkillsAction(response.data));
  } catch(error) {
    console.log(error)
  }
}

// export default function* defaultSaga() {
//   yield takeLatest(SUBMIT_SKILLS_ACTION, submitSkills);
// }
