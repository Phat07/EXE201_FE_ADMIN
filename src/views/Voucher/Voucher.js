import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import TableProduct from "./TableProduct";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actProductGetAsync } from "src/store/product/action";
import { GetAllVoucher } from "src/store/voucher/action";

function Product() {
  const allVoucher = useSelector((state) => state.VOUCHER.allVoucher);
  console.log("allVoucher: ", allVoucher);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllVoucher(currentPage, itemsPerPage));
  }, [dispatch, currentPage, itemsPerPage]);
  const navigate = useNavigate();
  const handleUpdate = (user) => {
    console.log("Update item with id:", user.id);
    navigate(`/product-detail/${user.id}`);
  };
  const filterByStatus = (status) => {
    return allVoucher?.items?.filter(
      (voucher) => voucher.isSystemCreated === status
    );
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Voucher</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các Voucher có trong hệ thống{" "}
            </p>
            <TableProduct data={filterByStatus(true)} onUpdate={handleUpdate} />
            <div
              className="d-flex justify-content-center"
              style={{
                marginTop: "20px",
              }}
            >
              {/* {currentPage > 1 && ( */}
              <CButton
                disabled={currentPage === 1}
                color="success"
                className="px-4"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previos
              </CButton>
              {/* )} */}
              <p
                className="text-medium-emphasis medium"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {allVoucher.page}
              </p>
              {/* {currentPage < salonInformation?.totalPages && ( */}
              <CButton
                disabled={currentPage === allVoucher?.totalPages}
                color="success"
                className="px-4"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </CButton>
              {/* )} */}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Product;
