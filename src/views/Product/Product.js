import React, { useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import TableProduct from "./TableProduct";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actProductGetAsync } from "src/store/product/action";

function Product() {
  const allProduct = useSelector((state) => state.PRODUCT.products);
  console.log("All product: ", allProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actProductGetAsync());
  }, [dispatch]);
  const navigate = useNavigate();
  const handleUpdate = (user) => {
    console.log("Update item with id:", user._id);
    navigate(`/product-detail/${user._id}`);
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Product</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các sản phẩm có trong hệ thống{" "}
            </p>
            <TableProduct data={allProduct} onUpdate={handleUpdate} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Product;
