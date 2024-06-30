import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import TableTrannsacton from "./TableTransaction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllPayments } from "src/store/payment/action";

function TransactionRequest() {
  const navigate = useNavigate();
  // const [showConfirm, setShowConfirm] = useState(false);
  // const [confirmData, setConfirmData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const token = localStorage.getItem("ACCESS_TOKEN");
  // const requestPaid = useSelector((state) => state.PAYMENT.requestPaid);
  const allPayments = useSelector((state) => state.PAYMENT.allPayments);

  console.log("allPayments: ", allPayments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPayments(currentPage, itemsPerPage));
  }, [currentPage, itemsPerPage, dispatch]);
  const handleDetailPayment = (payment) => {
    navigate(`/transaction-detail/${payment.id}`);
    console.log("Update user at id:", payment.id);
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
              Hiện thị các giao dịch với salon owner
            </p>
            <TableTrannsacton
              data={allPayments.items}
              onConfirm={handleDetailPayment}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default TransactionRequest;
