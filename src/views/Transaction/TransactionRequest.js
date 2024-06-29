import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
// import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalConfirmTransaction from "./ModalConfirmTransaction";
import TableTrannsacton from "./TableTransaction";
import ChangeTabTransaction from "./ChangeTabTransaction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   actRequestGetMoneyPaidAsync,
//   actRequestGetMoneyUnpaidAsync,
// } from "src/store/request/action";
import { toast } from "react-toastify";

function TransactionRequest() {
  // const [showDelete, setShowDelete] = useState(false);
  // const [deleteData, setDeleteData] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmData, setConfirmData] = useState({});

  const token = localStorage.getItem("ACCESS_TOKEN");
  const requestPaid = useSelector((state) => state.REQUEST.requestPaid);
  const requestUnpaid = useSelector((state) => state.REQUEST.requestUnpaid);
  // console.log("request Paid:  ", requestPaid);
  // console.log("request UnPaid: ", requestUnpaid);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(actRequestGetMoneyPaidAsync(token));
    // dispatch(actRequestGetMoneyUnpaidAsync(token));
  }, []);
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
            <strong>Aution</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các đấu giá có trong hệ thống
            </p>
            <ChangeTabTransaction
              requestContent={
                <div>
                  {
                    <TableTrannsacton
                      data={requestUnpaid}
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
                      data={requestPaid}
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

export default TransactionRequest;
