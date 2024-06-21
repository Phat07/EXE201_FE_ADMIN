import { API } from "./api";

export const ProductServices = {
  addProduct(data, token) {
    return API.post("/products", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllProduct() {
    return API.get("/products");
  },
  getAllProductByUserId(data, token) {
    return API.get(`/products/${data}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllProductsCount() {
    return API.get("/products/ProductCount");
  },
  getAllUnAuctionedProductsCount() {
    return API.get("/products/UnAuctionedProductCount");
  },
  getAllAuctionedProductsCount() {
    return API.get("/products/AuctionedProductCount");
  },
};
