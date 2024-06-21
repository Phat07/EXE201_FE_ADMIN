// Trong sidebarReducer.js
const initialState = { sidebarShow: true };

function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case "set":
      return { ...state, sidebarShow: action.sidebarShow };
    default:
      return state;
  }
}

// function sidebarReducer (state = initialState, { type, ...rest }) {
//     switch (type) {
//       case 'set':
//         return { ...state, ...rest }
//       default:
//         return state
//     }
// }

export default sidebarReducer;
