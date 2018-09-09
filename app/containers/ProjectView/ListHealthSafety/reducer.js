// /*
//  *
//  * ListHealthSafety reducer - not used
//  *
//  */
//
// import { fromJS } from 'immutable';
// import {
//   DEFAULT_ACTION,
//   LIST_HEALTHSAFETY_ACTION,
//   LISTED_HEALTHSAFETY_ACTION,
// } from './constants';
//   const initialState = fromJS({
//   list_healthsafety: [],
//   loading: false,
//   done: false,
// });
//
// function listHealthSafetyReducer(state = initialState, action) {
//   switch (action.type) {
//     case DEFAULT_ACTION:
//       return state;
//     console.log(payload)
//     case LIST_HEALTHSAFETY_ACTION:
//       return state
//         .set('list_healthsafety', action.payload)
//         .set('loading', true)
//         .set('done', false);
//     case LISTED_HEALTHSAFETY_ACTION:
//       return state
//         .set('list_healthsafety', action.payload)
//         .set('loading', false)
//         .set('done', true);
//
//     default:
//       return state;
//   }
// }
//
// export default listHealthSafetyReducer;
