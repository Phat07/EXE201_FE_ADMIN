import { API } from "./api";

export const ReportWalletServices = {
  ConfirmDeposit(data, token) {
    return API.post("/wallets/browse-deposit", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllWalletHistory(token) {
    return API.get("/wallets/walletHistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getDepositCount(token) {
    return API.get("/wallets/DepositCount", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getWithdrawCount(token) {
    return API.get("/wallets/WithdrawCount", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getWalletHistory(data, token) {
    return API.get(`/wallets/wallet-history/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
