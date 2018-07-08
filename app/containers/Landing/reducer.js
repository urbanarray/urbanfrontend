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
  SERVER_ERROR_ACTION,
  EMPTY_ERROR_ACTION,
  
} from './constants';

const initialState = fromJS({
  submitCode: null,
  loading: false,
  done: false,
  errors:[],

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
        set('errors', []);

    case SUBMITED_CODE_ACTION:
      return state
        .set('submitedCode', null)
        .set('loading', false)
        .set('done', true)
        .set('errors', [])
    
    case SERVER_ERROR_ACTION: 
      return state
        .set('errors', action.payload);
        
    case EMPTY_ERROR_ACTION: 
      return state
        .set('errors', []);
        
    default:
      return state;
	}
}


export default landingReducer;