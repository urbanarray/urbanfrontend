import { takeLatest, call, put, select } from 'redux-saga/effects';
import { CREATE_SKILLS_ACTION, LIST_SKILLS_ACTION } from "./constants";
import { createdSkillsAction, listedSkillsAction } from "./actions";
import { makeSelectSkill } from "./selectors";
import { createSkillApi, listSkillsApi } from "./api";


export function* create() {
  try {
    const skill = yield select(makeSelectSkill());
    const response = yield call(createSkillApi, skill);
    yield put(createdSkillsAction(response.data));
  } catch (error) {
    console.log(error)
  }

}

export function* index() {
  try {
    const response = yield call(listSkillsApi);
    yield put(listedSkillsAction(response.data.skill));
  } catch (error) {
    console.log(error)
  }

}


// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CREATE_SKILLS_ACTION, create);
  yield takeLatest(LIST_SKILLS_ACTION, index);
  // See example in containers/HomePage/saga.js
}
