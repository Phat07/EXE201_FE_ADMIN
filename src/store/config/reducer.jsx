import { ALL_CONFIG } from "./action";

const initialState = {
  allConfig: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CONFIG:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        allConfig: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
