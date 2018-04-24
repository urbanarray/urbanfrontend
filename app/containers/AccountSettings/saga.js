import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SKILLS_LIST_ACTION, LIST_USER_SKILLS_ACTION, CREATE_USER_SKILLS_ACTION } from "./constants";
import { skillsListedAction, createdUserSkillsAction } from "./actions";
import {  } from "./selectors";
import { listSkillsApi, listUserSkillsApi, createUserSkillsApi } from "./api";


export function* listSkills() {
  try {
    const response = yield call(listSkillsApi, {});
    yield put(skillsListedAction(response.data));
  } catch (error) {
    alert('Got Error.')
  }

}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SKILLS_LIST_ACTION, listSkills);
  // See example in containers/HomePage/saga.js
}
