import {
  CONFIRM_DEPOSIT,
  ALL_WALLET_HISTORY,
  DEPOSIT_COUNT,
  WITHDRAW_COUNT,
  WALLET_HISTORY_ID,
} from "./action";

const initialState = {
  confirmDeposit: [],
  allWalletHistory: [],
  depositCount: null,
  withdrawCount: null,
  walletHistory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_WALLET_HISTORY:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        allWalletHistory: action.payload,
      };
    case CONFIRM_DEPOSIT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        confirmDeposit: action.payload,
      };
    case DEPOSIT_COUNT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        depositCount: action.payload,
      };
    case WITHDRAW_COUNT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        withdrawCount: action.payload,
      };
    case WALLET_HISTORY_ID:
      return {
        ...state,
        walletHistory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
