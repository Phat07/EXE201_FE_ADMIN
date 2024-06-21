import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
// import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalConfirmTransaction from "./ModalConfirmBanUser";
import TableTrannsacton from "./TableTransaction";
import ChangeTabTransaction from "./ChangeTabTransaction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actBanRequestGetAsync,
  actAlreadyBanRequestGetAsync,
} from "src/store/request/action";
import { toast } from "react-toastify";

function BanRequest() {
  // const [showDelete, setShowDelete] = useState(false);
  // const [deleteData, setDeleteData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmData, setConfirmData] = useState({});

  const token = localStorage.getItem("ACCESS_TOKEN");
  const banRequest = useSelector((state) => state.REQUEST.banRequest);
  const alreadyBanRequest = useSelector(
    (state) => state.REQUEST.alreadyBanRequest
  );
  console.log("request Ban:  ", banRequest);
  console.log("request Has Ban: ", alreadyBanRequest);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actBanRequestGetAsync(token));
    dispatch(actAlreadyBanRequestGetAsync(token));
  }, [dispatch, token]);
  // const handleDelete = (transaction) => {
  //   console.log("Delete item with id:", transaction);
  //   setDeleteData(transaction);
  //   setShowDelete(true);
  // };

  const navigate = useNavigate();
  const handleConfirm = (transaction) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    console.log("confirm trans at id:", transaction);
    setConfirmData(transaction);
    setShowConfirm(true);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ban Request</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các yêu cầu ban user
            </p>
            <ChangeTabTransaction
              requestContent={
                <div>
                  {
                    <TableTrannsacton
                      data={banRequest}
                      onConfirm={handleConfirm}
                      // onDelete={handleDelete}
                    />
                  }
                </div>
              }
              historyContent={
                <div>
                  {
                    <TableTrannsacton
                      data={alreadyBanRequest}
                      // onDelete={handleDelete}
                    />
                  }
                </div>
              }
            />
          </CCardBody>
        </CCard>
      </CCol>
      {/* <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        deleteData={deleteData}
      /> */}
      <ModalConfirmTransaction
        showProp={showConfirm}
        handleClose={() => {
          setShowConfirm(false);
        }}
        confirmData={confirmData}
      />
    </CRow>
  );
}

export default BanRequest;
