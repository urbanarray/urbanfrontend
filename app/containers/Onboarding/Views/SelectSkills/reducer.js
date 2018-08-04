// select skills reducer

import { fromJS } from 'immutable';
import {
  SUBMIT_SKILLS
} from './constants';

const initialState = fromJS({
  wants: {},
  haves: {}
});

function skillSelectionReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SKILLS:
      console.log(action.payload, 'this is the payload from the skill selection reducer')
      return state
      .set('wants', action.payload.wants)
      .set('haves', action.payload.haves)
    default:
      return state;
  }
}

export default skillSelectionReducer;
