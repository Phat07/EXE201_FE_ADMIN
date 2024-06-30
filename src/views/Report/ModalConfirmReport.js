import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import { actConfirmBanUserPutAsync } from "../../store/user/action";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  CButton,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { ConfirmReport } from "src/store/request/action";
import { useNavigate } from "react-router-dom";
const ModalConfirmReport = (props) => {
  const { isVisible, OnClose, id } = props;
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const confirm = useSelector((state) => state.USER.allUser);
  // console.log("confirm", confirm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status !== "APPROVED" && status !== "REJECTED") {
      toast.error("Chọn status trước");
      return;
    }
    if (!content) {
      toast.error("Nhập lời nhắn trước");
      return;
    }
    let data = {
      descriptionAdmin: content,
      status: status,
    };
    // console.log(data);
    // console.log(id);
    await dispatch(ConfirmReport(id, data));
    setStatus("");
    setContent("");
    OnClose();
    navigate("/Report");
  };

  return (
    <>
      <CModal visible={isVisible} onClose={OnClose}>
        <CModalHeader>
          <CModalTitle>Confirm Report</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {/* <CFormInput className="mb-3" value={data?.name || ""} readOnly /> */}
          <CFormSelect
            className="custom-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Select status"
          >
            <option value="">Select status</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
            {/* <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option> */}
          </CFormSelect>
          <CFormInput
            className="mt-3"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={OnClose}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSubmit}>
            Confirm
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

ModalConfirmReport.propTypes = {
  id: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  OnClose: PropTypes.func.isRequired,
};

export default ModalConfirmReport;
