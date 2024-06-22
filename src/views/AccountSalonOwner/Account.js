import React, { useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalConfirmDelete from "./ModalConfirmDelete";
import TableAccount from "./TableAccount";
import { actAllUserGetAsync } from "src/store/user/action";
import { useDispatch, useSelector } from "react-redux";
// import DocsExample  from 'src/components/DocsExample'
function Account() {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [userDeleteData] = useState({});
  const token = localStorage.getItem("ACCESS_TOKEN");
  const allUser = useSelector((state) => state.USER.allUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actAllUserGetAsync(token));
  }, [dispatch, token]);
  const handleUpdate = (user) => {
    navigate(`/update-user/${user._id}`);
    // Thêm logic update tại đây
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

            <TableAccount data={allUser} onUpdate={handleUpdate} />
          </CCardBody>
        </CCard>
      </CCol>
      <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        userDeleteData={userDeleteData}
      />
    </CRow>
  );
}

export default Account;
