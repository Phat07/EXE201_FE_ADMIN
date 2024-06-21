import { AuctionServices } from "../../services/auctionServices";
export const ALL_AUCTION = "ALL_AUCTION";
export const NOT_YET_AUCTION = "NOT_YET_AUCTION";
export const ABOUT_TO_AUCTION = "ABOUT_TO_AUCTION";
export const AUCTIONING = "AUCTIONING";
export const AUCTIONED = "AUCTIONED";
export const NOT_YET_AUCTION_ID = "NOT_YET_AUCTION_ID";
export const ABOUT_TO_AUCTION_ID = "ABOUT_TO_AUCTION_ID";
export const AUCTIONING_ID = "AUCTIONING_ID";
export const AUCTIONED_ID = "AUCTIONED_ID";
export const NOT_YET_AUCTION_MEMBER = "NOT_YET_AUCTION_MEMBER";
export const ABOUT_TO_AUCTION_MEMBER = "ABOUT_TO_AUCTION_MEMBER";
export const AUCTIONING_MEMBER = "AUCTIONING_MEMBER";
export const AUCTIONED_MEMBER = "AUCTIONED_MEMBER";
export const ALL_AUCTION_COUNT = "ALL_AUCTION_COUNT";
export const NOT_YET_AUCTION_COUNT = "NOT_YET_AUCTION_COUNT";
export const ABOUT_TO_AUCTION_COUNT = "ABOUT_TO_AUCTION_COUNT";
export const AUCTIONING_COUNT = "AUCTIONING_COUNT";
export const AUCTIONED_COUNT = "AUCTIONED_COUNT";
export const GET_AUCTION_MEMBER_JOIN_AUCTION_ROOM =
  "GET_AUCTION_MEMBER_JOIN_AUCTION_ROOM";
export const allAuction = (list) => {
  return {
    type: ALL_AUCTION,
    payload: list,
  };
};
export const notYetAuction = (list) => {
  return {
    type: NOT_YET_AUCTION,
    payload: list,
  };
};
export const aboutToAuction = (list) => {
  return {
    type: ABOUT_TO_AUCTION,
    payload: list,
  };
};
export const Auctioning = (list) => {
  return {
    type: AUCTIONING,
    payload: list,
  };
};
export const Auctioned = (list) => {
  return {
    type: AUCTIONED,
    payload: list,
  };
};
export const notYetAuctionId = (list) => {
  return {
    type: NOT_YET_AUCTION_ID,
    payload: list,
  };
};
export const aboutToAuctionId = (list) => {
  return {
    type: ABOUT_TO_AUCTION_ID,
    payload: list,
  };
};
export const AuctioningId = (list) => {
  return {
    type: AUCTIONING_ID,
    payload: list,
  };
};
export const AuctionedId = (list) => {
  return {
    type: AUCTIONED_ID,
    payload: list,
  };
};
export const notYetAuctionMember = (list) => {
  return {
    type: NOT_YET_AUCTION_MEMBER,
    payload: list,
  };
};
export const aboutToAuctionMember = (list) => {
  return {
    type: ABOUT_TO_AUCTION_MEMBER,
    payload: list,
  };
};
export const AuctioningMember = (list) => {
  return {
    type: AUCTIONING_MEMBER,
    payload: list,
  };
};
export const AuctionedMember = (list) => {
  return {
    type: AUCTIONED_MEMBER,
    payload: list,
  };
};
export const allAuctionCount = (list) => {
  return {
    type: ALL_AUCTION_COUNT,
    payload: list,
  };
};
export const notYetAuctionCount = (list) => {
  return {
    type: NOT_YET_AUCTION_COUNT,
    payload: list,
  };
};
export const aboutToAuctionCount = (list) => {
  return {
    type: ABOUT_TO_AUCTION_COUNT,
    payload: list,
  };
};
export const AuctioningCount = (list) => {
  return {
    type: AUCTIONING_COUNT,
    payload: list,
  };
};
export const AuctionedCount = (list) => {
  return {
    type: AUCTIONED_COUNT,
    payload: list,
  };
};
export const getAllMemberInJoinAuctionRoom = (list) => {
  return {
    type: GET_AUCTION_MEMBER_JOIN_AUCTION_ROOM,
    payload: list,
  };
};
export function actAuctionGetAsync(token) {
  return (dispatch) => {
    AuctionServices.getAllAuction(token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allAuction(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actNotYetAuctionGetAsync(token) {
  return (dispatch) => {
    AuctionServices.getAuctionNotYetAuctionedByUser(token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(notYetAuction(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAboutToAuctionGetAsync(token) {
  return (dispatch) => {
    AuctionServices.getAuctionAboutToAuctionByUser(token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(aboutToAuction(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAuctioningAuctionGetAsync(token) {
  return (dispatch) => {
    AuctionServices.getAuctioningByUser(token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(Auctioning(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAuctionedAuctionGetAsync(token) {
  return (dispatch) => {
    AuctionServices.getAuctionedByUser(token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(Auctioned(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctionCountGetAsync() {
  return (dispatch) => {
    AuctionServices.getAllAuctionCount()
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allAuctionCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actNotYetAuctionCountGetAsync() {
  return (dispatch) => {
    AuctionServices.getAllNotYetAuctionCount()
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(notYetAuctionCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAboutToAuctionCountGetAsync() {
  return (dispatch) => {
    AuctionServices.getAllAboutToAuctionCount()
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(aboutToAuctionCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAuctioningAuctionCountGetAsync() {
  return (dispatch) => {
    AuctionServices.getAllAuctioningAuctionCount()
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctioningCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actAuctionedAuctionCountGetAsync() {
  return (dispatch) => {
    AuctionServices.getAllAuctionedAuctionCount()
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctionedCount(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctionPostAsync(data, token) {
  return async (dispatch) => {
    try {
      const response = await AuctionServices.addAuction(data, token);
      if (response.status === 200 || response.status === 201) {
        // toast.success("New Product has been added successfully ~");
        dispatch(actAuctionGetAsync(token));
      } else {
        // toast.error("Post Product to fail");
        console.log("fail");
      }
    } catch (error) {
      console.error("Error occurred while posting auction:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

export function actNotYetAuctionGetIDAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getAuctionNotYetAuctionedByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(notYetAuctionId(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAboutToAuctionGetIDAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getAuctionAboutToAuctionByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(aboutToAuctionId(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctioningAuctionGetIDAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getAuctioningByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctioningId(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctionedAuctionGetIDAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getAuctionedByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctionedId(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actNotYetAuctionGetMemberAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getMemberNotYetAuctionedByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(notYetAuctionMember(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAboutToAuctionGetMemberAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getMemberAboutToAuctionByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(aboutToAuctionMember(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctioningAuctionGetMemberAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getMemberAuctioningByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctioningMember(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAuctionedAuctionGetMemberAsync(id, token) {
  return (dispatch) => {
    AuctionServices.getMemberAuctionedByUserID(id, token)
      .then((response) => {
        console.log("dataAuction", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctionedMember(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actGetAllMemberJoinAuctionRoomGetAsync(data, token) {
  return (dispatch) => {
    AuctionServices.getAllMemberInJoinAuctionBid(data, token)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch(getAllMemberInJoinAuctionRoom(response.data));
        } else {
          // toast.error("get all syllabus to fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all auctions:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
