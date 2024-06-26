import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import ChangeTabReport from "./ChangeTabReport";
import { useNavigate } from "react-router-dom";

function Report(props) {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const navigate = useNavigate();
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Report</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hiển thị các Report có trong hệ thống
            </p>

            <ChangeTabReport />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Report;
