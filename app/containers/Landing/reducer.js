/*
 *
 * Landing reducer
 *
 */

import { fromJS } from 'immutable';

import { 

  DEFAULT_ACTION,
  SUBMIT_CODE_ACTION,
  SUBMITED_CODE_ACTION,

} from './constants';

const initialState = fromJS({
  submitCode: null,
  loading: false,
  done: false,
});

function landingReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case SUBMIT_CODE_ACTION:
     
      return state
        .set('submitCode', action.payload)
        .set('loading',true)
        .set('done',false)

    case SUBMITED_CODE_ACTION:
      return state
        .set('submitedCode', null)
        .set('loading', false)
        .set('done', true)
	
    default:
      return state;
	}
}


export default landingReducer;