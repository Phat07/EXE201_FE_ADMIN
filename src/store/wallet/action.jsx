import { ReportWalletServices } from "../../services/walletRequest";
import {
  actRequestGetMoneyPaidAsync,
  actRequestGetMoneyUnpaidAsync,
} from "../request/action";

export const CONFIRM_DEPOSIT = "CONFIRM_DEPOSIT";
export const ALL_WALLET_HISTORY = "ALL_WALLET_HISTORY";
export const DEPOSIT_COUNT = "DEPOSIT_COUNT";
export const WITHDRAW_COUNT = "WITHDRAW_COUNT";
export const WALLET_HISTORY_ID = "WALLET_HISTORY_ID";

export const confirmDeposit = (list) => {
  return {
    type: CONFIRM_DEPOSIT,
    payload: list,
  };
};

export const allWalletHistory = (list) => {
  return {
    type: ALL_WALLET_HISTORY,
    payload: list,
  };
};

export const DepositCount = (list) => {
  return {
    type: DEPOSIT_COUNT,
    payload: list,
  };
};

export const WithdrawCount = (list) => {
  return {
    type: WITHDRAW_COUNT,
    payload: list,
  };
};
export const getWalletHistoryById = (list) => {
  return {
    type: WALLET_HISTORY_ID,
    payload: list,
  };
};
export function actRequestConfirmAsync(data, token) {
  return (dispatch) => {
    console.log("request");
    ReportWalletServices.ConfirmDeposit(data, token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(confirmDeposit(response.data));
          // dispatch(actRequestGetMoneyPaidAsync(token));
          // dispatch(actRequestGetMoneyUnpaidAsync(token));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actWalletHistoryGetAsync(token) {
  return (dispatch) => {
    ReportWalletServices.getAllWalletHistory(token)
      .then((response) => {
        console.log("wallet history", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allWalletHistory(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all wallet history:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actDepositCountGetAsync(token) {
  return (dispatch) => {
    ReportWalletServices.getDepositCount(token)
      .then((response) => {
        console.log("wallet deposit", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(DepositCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all wallet history:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actWithdrawCountGetAsync(token) {
  return (dispatch) => {
    ReportWalletServices.getWithdrawCount(token)
      .then((response) => {
        console.log("wallet withdraw", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(WithdrawCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all wallet history:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actGetWalletHistoryByUserAsync(data, token) {
  return (dispatch) => {
    ReportWalletServices.getWalletHistory(data, token)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch(getWalletHistoryById(response.data));
        } else {
          // toast.error("get all syllabus to fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
