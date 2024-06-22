import {
  ACT_USER_LOGIN,
  ACT_USER_NOT_FETCH_ME,
  ALL_CUSTOMER,
  GET_CUSTOMER_ID,
} from "./action";

const initialState = {
  // fakeUser: [],
  users: [],
  token: null,
  currentUser: null,
  allCustomer: [],
  detailCustomer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_USER_LOGIN:
      localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        currentUser: action.payload.currentUser,
        token: action.payload.token,
        role: action.payload.role,
      };
    case ACT_USER_NOT_FETCH_ME:
      localStorage.setItem("ACCESS_TOKEN", null);
      return {
        ...state,
        token: action.payload,
      };
    case ALL_CUSTOMER:
      return {
        ...state,
        allCustomer: action.payload,
      };
    case GET_CUSTOMER_ID:
      return {
        ...state,
        detailCustomer: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
