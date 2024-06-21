import {
  ALL_PRODUCT,
  PRODUCT_BY_ID,
  PRODUCT_COUNT,
  AUCTIONED_PRODUCT_COUNT,
  UN_AUCTIONED_PRODUCT_COUNT,
} from "./action";

const initialState = {
  products: [],
  productCount: null,
  UnAuctionedProductCount: null,
  AuctionedProductCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_COUNT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        productCount: action.payload,
      };
    case AUCTIONED_PRODUCT_COUNT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        UnAuctionedProductCount: action.payload,
      };
    case UN_AUCTIONED_PRODUCT_COUNT:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        AuctionedProductCount: action.payload,
      };
    case PRODUCT_BY_ID:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
