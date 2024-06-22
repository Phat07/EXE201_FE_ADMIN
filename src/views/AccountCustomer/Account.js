import React, { useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ModalConfirmDelete from "./ModalConfirmDelete";
import TableAccount from "./TableAccount";
import { actGetAllCustomer } from "src/store/user/action";
import { useDispatch, useSelector } from "react-redux";
// import DocsExample  from 'src/components/DocsExample'
function Account() {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [userDeleteData, setUserDeleteData] = useState({});
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const allCustomer = useSelector((state) => state.USER.allCustomer);
  console.log("allCustomer", allCustomer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAllCustomer(currentPage, itemsPerPage));
  }, [dispatch, currentPage, itemsPerPage]);
  const handleUpdate = (user) => {
    navigate(`/update-user/${user.id}`);
  };
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các user có trong hệ thống{" "}
            </p>
            <p className="small d-none d-md-flex me-auto">
              {/* <CCardBody> */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              {/* </CCardBody> */}
            </p>

            <TableAccount data={allCustomer.items} onUpdate={handleUpdate} />
            <div
              className="d-flex justify-content-center"
              style={{
                marginTop: "20px",
              }}
            >
              {currentPage > 1 && (
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previos
                </CButton>
              )}
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
                {allCustomer.page}
              </p>
              {currentPage < allCustomer?.totalPages && (
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </CButton>
              )}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      {/* <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        userDeleteData={userDeleteData}
      /> */}
    </CRow>
  );
}

export default Account;
