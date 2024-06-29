import { REPORT_BY_STATUS } from "./action";

const initialState = {
  reportByRole: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_BY_STATUS:
      return {
        ...state,
        reportByRole: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
