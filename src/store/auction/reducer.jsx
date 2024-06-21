import {
  ALL_AUCTION,
  NOT_YET_AUCTION,
  ABOUT_TO_AUCTION,
  AUCTIONING,
  AUCTIONED,
  NOT_YET_AUCTION_ID,
  ABOUT_TO_AUCTION_ID,
  AUCTIONING_ID,
  AUCTIONED_ID,
  NOT_YET_AUCTION_MEMBER,
  ABOUT_TO_AUCTION_MEMBER,
  AUCTIONING_MEMBER,
  AUCTIONED_MEMBER,
  ALL_AUCTION_COUNT,
  ABOUT_TO_AUCTION_COUNT,
  AUCTIONING_COUNT,
  AUCTIONED_COUNT,
  NOT_YET_AUCTION_COUNT,
  GET_AUCTION_MEMBER_JOIN_AUCTION_ROOM,
} from "./action";

const initialState = {
  auctions: [],
  notYetAuction: [],
  aboutToAuction: [],
  auctioning: [],
  auctioned: [],
  auctionsCount: null,
  notYetAuctionCount: null,
  aboutToAuctionCount: null,
  auctioningCount: null,
  auctionedCount: null,
  notYetAuctionId: [],
  aboutToAuctionId: [],
  auctioningId: [],
  auctionedId: [],
  notYetAuctionMember: [],
  aboutToAuctionMember: [],
  auctioningMember: [],
  auctionedMember: [],
  allMemberJoinInAuction: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_AUCTION:
      return {
        ...state,
        auctions: action.payload,
      };
    case NOT_YET_AUCTION:
      return {
        ...state,
        notYetAuction: action.payload,
      };
    case ABOUT_TO_AUCTION:
      return {
        ...state,
        aboutToAuction: action.payload,
      };
    case AUCTIONING:
      return {
        ...state,
        auctioning: action.payload,
      };
    case AUCTIONED:
      return {
        ...state,
        auctioned: action.payload,
      };
    case ALL_AUCTION_COUNT:
      return {
        ...state,
        auctionsCount: action.payload,
      };
    case NOT_YET_AUCTION_COUNT:
      return {
        ...state,
        notYetAuctionCount: action.payload,
      };
    case ABOUT_TO_AUCTION_COUNT:
      return {
        ...state,
        aboutToAuctionCount: action.payload,
      };
    case AUCTIONING_COUNT:
      return {
        ...state,
        auctioningCount: action.payload,
      };
    case AUCTIONED_COUNT:
      return {
        ...state,
        auctionedCount: action.payload,
      };
    case NOT_YET_AUCTION_ID:
      return {
        ...state,
        notYetAuctionId: action.payload,
      };
    case ABOUT_TO_AUCTION_ID:
      return {
        ...state,
        aboutToAuctionId: action.payload,
      };
    case AUCTIONING_ID:
      return {
        ...state,
        auctioningId: action.payload,
      };
    case AUCTIONED_ID:
      return {
        ...state,
        auctionedId: action.payload,
      };
    case NOT_YET_AUCTION_MEMBER:
      return {
        ...state,
        notYetAuctionMember: action.payload,
      };
    case ABOUT_TO_AUCTION_MEMBER:
      return {
        ...state,
        aboutToAuctionMember: action.payload,
      };
    case AUCTIONING_MEMBER:
      return {
        ...state,
        auctioningMember: action.payload,
      };
    case AUCTIONED_MEMBER:
      return {
        ...state,
        auctionedMember: action.payload,
      };
    case GET_AUCTION_MEMBER_JOIN_AUCTION_ROOM:
      return {
        ...state,
        allMemberJoinInAuction: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
