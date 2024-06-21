import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
// import ModalConfirmDelete from "./ModalConfirmDelete";
import TableAution from "src/views/Aution/TableAution";
import ChangeTabAution from "./ChangeTabAution";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actNotYetAuctionGetAsync,
  actAboutToAuctionGetAsync,
  actAuctioningAuctionGetAsync,
  actAuctionedAuctionGetAsync,
} from "src/store/auction/action";
function Aution() {
  // const [showDelete, setShowDelete] = useState(false);
  // const [deleteData, setDeleteData] = useState({});

  const token = localStorage.getItem("ACCESS_TOKEN");
  const notYetAuction = useSelector((state) => state.AUCTION.notYetAuction);
  const aboutToAuction = useSelector((state) => state.AUCTION.aboutToAuction);
  const auctioningAuction = useSelector((state) => state.AUCTION.auctioning);
  const auctionedAuction = useSelector((state) => state.AUCTION.auctioned);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actNotYetAuctionGetAsync(token));
    dispatch(actAboutToAuctionGetAsync(token));
    dispatch(actAuctioningAuctionGetAsync(token));
    dispatch(actAuctionedAuctionGetAsync(token));
  }, [dispatch, token]);
  // const handleDelete = (aution) => {
  //   console.log("Delete item with id:", aution.id);
  //   setDeleteData(aution);
  //   setShowDelete(true);
  // };
  console.log("All Auctioned auction: ", auctionedAuction);
  const navigate = useNavigate();
  const handleUpdateUser = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    navigate(`/aution-detail/${aution._id}`);
    console.log("Update user at id:", aution.id);
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
            <ChangeTabAution
              chuaDienRaContent={
                <div>
                  {
                    <TableAution
                      data={notYetAuction}
                      onUpdate={handleUpdateUser}
                      // onDelete={handleDelete}
                    />
                  }
                </div>
              }
              sapDienRaContent={
                <div>
                  {
                    <TableAution
                      data={aboutToAuction}
                      onUpdate={handleUpdateUser}
                      // onDelete={handleDelete}
                    />
                  }
                </div>
              }
              dangDienRaContent={
                <div>
                  {
                    <TableAution
                      data={auctioningAuction}
                      onUpdate={handleUpdateUser}
                      // onDelete={handleDelete}
                    />
                  }
                </div>
              }
              daDienRaContent={
                <div>
                  {
                    <TableAution
                      data={auctionedAuction}
                      onUpdate={handleUpdateUser}
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
    </CRow>
  );
}

export default Aution;
