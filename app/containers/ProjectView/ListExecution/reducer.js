// /*
//  *
//  * ListExecution reducer - NOT USED
//  *
//  */
//
// import { fromJS } from 'immutable';
// import {
//   DEFAULT_ACTION,
//   LIST_EXECUTION_ACTION,
//   LISTED_EXECUTION_ACTION
//
// } from './constants';
//
// const initialState = fromJS({
//   execution_list: [],
//   execution_loading: false,
//   execution_done: false,
// });
//
// function listExecutionReducer(state = initialState, action) {
//   switch (action.type) {
//     case DEFAULT_ACTION:
//       return state;
//     case LIST_EXECUTION_ACTION:
//       return state
//         .set('execution_list', action.payload)
//         .set('execution_loading', true)
//         .set('execution_done', false)
//     case LISTED_EXECUTION_ACTION:
//       return state
//         .set('execution_list', action.payload)
//         .set('execution_loading', false)
//         .set('execution_done', true)
//     default:
//       return state;
//   }
// }
//
// export default listExecutionReducer;
