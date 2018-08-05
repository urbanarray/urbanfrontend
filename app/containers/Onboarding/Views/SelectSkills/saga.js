// import { submitSkillsApi } from './api';
// import {takeLatest, call, put, select } from 'redux-saga/effects';
// import { makeSelectSelectSkills } from './selectors';
// import { SUBMIT_SKILLS_ACTION } from './constants';
//
//
// export function* submitSkills() {
//   try {
//     console.log('submit skills saga is being called')
//     const submitSkillsData = yield select(makeSelectSelectSkills());
//
//     // const response = yield call(submitSkillsApi, submitSkillsData);
//     console.log(response, 'this is response from the submit skills saga')
//     yield put(submitSkillsAction(submitSkillsData));
//   } catch(error) {
//     console.log(error)
//   }
// }
//
// export default function* defaultSaga() {
//   yield takeLatest(SUBMIT_SKILLS_ACTION, submitSkills);
// }
