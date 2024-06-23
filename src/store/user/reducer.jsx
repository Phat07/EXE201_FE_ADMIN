import {
  ACT_USER_LOGIN,
  ACT_USER_NOT_FETCH_ME,
  ALL_CUSTOMER,
  GET_CUSTOMER_ID,
  ALL_SALON,
  GET_SALON_ID,
} from "./action";

const initialState = {
  // fakeUser: [],
  users: [],
  token: null,
  currentUser: null,
  allCustomer: [],
  detailCustomer: null,
  allSalon: [],
  detailSalon: null,
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
    case ALL_SALON:
      return {
        ...state,
        allSalon: action.payload,
      };
    case GET_SALON_ID:
      return {
        ...state,
        detailSalon: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
