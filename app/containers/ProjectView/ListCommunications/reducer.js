// /*
//  *
//  * ListCommunications reducer - not used
//  */
//
// import { fromJS } from 'immutable';
// import * as c from './constants';
//
// const initialState = fromJS({
// 	communication_list: [],
// });
//
// function listCommunicationsReducer(state = initialState, action) {
//   switch (action.type) {
//     case c.DEFAULT_ACTION:
//       return state;
//     case c.LIST_COMMUNICATION_ACTION:
//       return state
//         .set('projectId', action.payload)
//         .set('loading', true)
//         .set('done', false);
//     case c.LISTED_COMMUNICATION_ACTION:
//       return state
//         .set('communication_list', action.payload)
//         .set('loading', false)
//         .set('done', true);
//     default:
//       return state;
//   }
// }
//
// export default listCommunicationsReducer;
