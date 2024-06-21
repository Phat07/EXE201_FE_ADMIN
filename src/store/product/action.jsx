import { ProductServices } from "../../services/productServices";

export const ALL_PRODUCT = "ALL_PRODUCT";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const PRODUCT_COUNT = "PRODUCT_COUNT";
export const UN_AUCTIONED_PRODUCT_COUNT = "UN_AUCTIONED_PRODUCT_COUNT";
export const AUCTIONED_PRODUCT_COUNT = "AUCTIONED_PRODUCT_COUNT";
export const allProduct = (list) => {
  return {
    type: ALL_PRODUCT,
    payload: list,
  };
};

export const productByID = (list) => {
  return {
    type: PRODUCT_BY_ID,
    payload: list,
  };
};
export const ProductCount = (list) => {
  return {
    type: PRODUCT_COUNT,
    payload: list,
  };
};
export const UnAuctionedProductCount = (list) => {
  return {
    type: UN_AUCTIONED_PRODUCT_COUNT,
    payload: list,
  };
};
export const AuctionedProductCount = (list) => {
  return {
    type: AUCTIONED_PRODUCT_COUNT,
    payload: list,
  };
};
export function actProductGetAsync() {
  return (dispatch) => {
    ProductServices.getAllProduct()
      .then((response) => {
        console.log("dataProduct", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allProduct(response.data));
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

export function actProductCountGetAsync() {
  return (dispatch) => {
    ProductServices.getAllProductsCount()
      .then((response) => {
        console.log("Product Count", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(ProductCount(response.data));
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

export function actUnAuctionedtProductCountGetAsync() {
  return (dispatch) => {
    ProductServices.getAllUnAuctionedProductsCount()
      .then((response) => {
        console.log("Un Auc Product Count", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(UnAuctionedProductCount(response.data));
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

export function actAuctionedtProductCountGetAsync() {
  return (dispatch) => {
    ProductServices.getAllAuctionedProductsCount()
      .then((response) => {
        console.log("Auc Product Count", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(AuctionedProductCount(response.data));
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

export function actProductPostAsync(data, token) {
  return async (dispatch) => {
    const response = await ProductServices.addProduct(data, token);
    if (response.status === 200 || response.status === 201) {
      // toast.success("New Product has been added successfully ~");
      dispatch(actProductGetAsync());
    } else {
      // toast.error("Post Product to fail");
      console.log("fail");
    }
  };
}

export function actProductGetByUserIdAsync(data, token) {
  return (dispatch) => {
    ProductServices.getAllProductByUserId(data, token)
      .then((response) => {
        console.log("dataProduct", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(productByID(response.data));
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
