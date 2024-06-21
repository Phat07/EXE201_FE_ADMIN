import React, { useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import TableConfig from "./TableConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actConfigGetAsync } from "src/store/config/action";

function Config() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const allConfig = useSelector((state) => state.CONFIG.allConfig);
  console.log("All Config : ", allConfig);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actConfigGetAsync(token));
  }, [dispatch, token]);
  const navigate = useNavigate();
  const handleUpdate = (config) => {
    console.log("Update item with id:", config._id);
    navigate(`/config/${config._id}`);
  };

  const handleDelete = (user) => {
    console.log("Delete item with id:", user._id);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cấu hình</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiện thị bảng cấu hình giá tiền trong hệ thống{" "}
            </p>
            <TableConfig
              data={allConfig}
              onUpdate={handleUpdate}
              // onDelete={handleDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Config;
