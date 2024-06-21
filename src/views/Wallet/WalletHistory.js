import React, { useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import TableWalletHistory from "./TableWalletHistory";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actWalletHistoryGetAsync } from "src/store/wallet/action";

function WalletHistory() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const allWalletHistory = useSelector(
    (state) => state.WALLET.allWalletHistory
  );
  console.log("All Wallet History: ", allWalletHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actWalletHistoryGetAsync(token));
  }, [dispatch, token]);
  const navigate = useNavigate();
  const handleUpdate = (user) => {
    console.log("Update item with id:", user._id);
    navigate(`/product-detail/${user._id}`);
  };

  const handleDelete = (user) => {
    console.log("Delete item with id:", user._id);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Wallet History</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các lịch sử giao dịch trong hệ thống{" "}
            </p>
            <TableWalletHistory
              data={allWalletHistory}
              // onUpdate={handleUpdate}
              // onDelete={handleDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default WalletHistory;
