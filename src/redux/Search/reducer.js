// import {
//     SET_FEED_REQUEST, 
//     SET_FEED_SUCCESS, 
//     SET_FEED_FAILURE
// } from './action'

// // 초기상태

// const Feed = (
//     state = {
//         isLoading: true,
//         items: [],
//     },
//     action
// ) => {
//     switch(action.type) {
//         case SET_FEED_REQUEST:
//             return {
//                 ...state,
//             }
//         case SET_FEED_SUCCESS:
//             return {
//                 isLoading: false,
//                 items: action.items,
//                 error: null,
//             }
//         case SET_FEED_FAILURE:
//             return {
//                 isLoading: false,
//                 error: action.error
//             }
//             default:
//                 return state;
//     }
// }

// export default Feed