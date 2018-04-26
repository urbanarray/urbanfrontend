import { takeLatest, call, put, select } from 'redux-saga/effects';
import { SKILLS_LIST_ACTION, LIST_USER_SKILLS_ACTION, CREATE_USER_SKILLS_ACTION } from "./constants";
import { skillsListedAction, createdUserSkillsAction, listedUserSkillsAction } from "./actions";
import { makeSelectaddUserSkills, makeSelectUserId} from "./selectors";
import { listSkillsApi, listUserSkillsApi, createUserSkillsApi } from "./api";


export function* listSkills() {
  try {
    const response = yield call(listSkillsApi, {});
    yield put(skillsListedAction(response.data.skill));
  } catch (error) {
    alert('Got Error.')
  }

}

export function* listUserSkills() {
  try {
    const userId = yield select(makeSelectUserId());
    const response = yield call(listUserSkillsApi, userId);
    if (response && response.data && response.data.user_skill) {
      yield put(listedUserSkillsAction(response.data.user_skill));
    }
  } catch (error) {
    alert('Got Error.')
  }

}

export function* createUserSkills() {
  try {
    const skill = yield select(makeSelectaddUserSkills());
    const response = yield call(createUserSkillsApi, skill);
    console.log(response);
    yield put(createdUserSkillsAction(response.data));
  } catch (error) {
    console.log(error)
    alert('Got Error.')
  }

}



// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(SKILLS_LIST_ACTION, listSkills);
  yield takeLatest(LIST_USER_SKILLS_ACTION, listUserSkills);
  yield takeLatest(CREATE_USER_SKILLS_ACTION, createUserSkills);
  // See example in containers/HomePage/saga.js
}
