import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import productReducer from "./product/reducer";
import auctionReducer from "./auction/reducer";
import requestReducer from "./request/reducer";
import walletReducer from "./wallet/reducer";
import configReducer from "./config/reducer";
import sidebarReducer from "./sidebarReducer";
import salonReducer from "./salon/reducer";
import voucherServiceReducer from "./voucher/reducer";
const rootReducer = combineReducers({
  USER: userReducer,
  SALON: salonReducer,
  PRODUCT: productReducer,
  AUCTION: auctionReducer,
  REQUEST: requestReducer,
  WALLET: walletReducer,
  CONFIG: configReducer,
  VOUCHER: voucherServiceReducer,
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
