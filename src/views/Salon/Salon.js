import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
// import ModalConfirmDelete from "./ModalConfirmDelete";
import TableAution from "src/views/Salon/TableAution";
import ChangeTabAution from "./ChangeTabAution";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonInformation } from "src/store/salon/action";
function Aution() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  // const salonInformation = useSelector((state) => state.SALON.allSalon);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  // console.log("salonInformation", salonInformation);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchSalonInformation(currentPage, itemsPerPage));
  // }, [currentPage, dispatch, itemsPerPage]);
  const navigate = useNavigate();
  const handleUpdateUser = (aution) => {
    navigate(`/Salon-detail/${aution.id}`);
    console.log("Update user at id:", aution.id);
  };
  // const filterByStatus = (status) => {
  //   return salonInformation?.items?.filter((salon) => salon.status === status);
  // };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Salon / Barber</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị các Salon / Barber có trong hệ thống
            </p>
            {/* <ChangeTabAution
              ApproveContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("APPROVED")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              RejectedConent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("REJECTED")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              PendingContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("PENDING")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              EditedContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("EDITED")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              UnavailableContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("UNAVAILABLE")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              CreatingContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("CREATING")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
              DisableContent={
                <div>
                  {
                    <TableAution
                      data={filterByStatus("DISABLED")}
                      onUpdate={handleUpdateUser}
                    />
                  }
                </div>
              }
            /> */}
            <ChangeTabAution />
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
