import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./user/reducer";
import productReducer from "./product/reducer";
import auctionReducer from "./auction/reducer";
import requestReducer from "./request/reducer";
import walletReducer from "./wallet/reducer";
import configReducer from "./config/reducer";
import sidebarReducer from "./sidebarReducer";
const rootReducer = combineReducers({
  USER: userReducer,
  PRODUCT: productReducer,
  AUCTION: auctionReducer,
  REQUEST: requestReducer,
  WALLET: walletReducer,
  CONFIG: configReducer,
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
