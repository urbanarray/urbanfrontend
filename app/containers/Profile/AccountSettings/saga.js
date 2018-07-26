import { takeLatest, call, put, select } from 'redux-saga/effects';
import { 
  SKILLS_LIST_ACTION, 
  LIST_USER_SKILLS_ACTION, 
  CREATE_USER_SKILLS_ACTION, 
  DELETE_USER_SKILLS_ACTION
} from './constants';
import { skillsListedAction, 
  createdUserSkillsAction, 
  listedUserSkillsAction, 
  deletedUserSkillsAction 
} from './actions';
import { makeSelectaddUserSkills, makeSelectUserId, makeSelectSkillId } from './selectors';
import { listSkillsApi, listUserSkillsApi, createUserSkillsApi, deleteUserSkillsApi } from './api';


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
    yield put(createdUserSkillsAction(response.data));
  } catch (error) {
    console.log(error)
    alert('Got Error.')
  }

}

export function* deleteUserSkills() {
  try {
    const skillId = yield select(makeSelectSkillId());
    const response = yield call(deleteUserSkillsApi, skillId);
    yield put(deletedUserSkillsAction(response.data));
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
  yield takeLatest(DELETE_USER_SKILLS_ACTION, deleteUserSkills);
  // See example in containers/HomePage/saga.js
}
