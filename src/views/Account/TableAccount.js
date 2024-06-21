import React from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
} from "@coreui/react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const TableAccount = (props) => {
  const { data, onUpdate, onDelete } = props;
  // Lấy thông tin người dùng hiện tại từ redux store
  const user = useSelector((state) => state.USER.currentUser);

  return (
    <CTable align="middle" className="mb-0 border" hover responsive>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell>ID</CTableHeaderCell>
          <CTableHeaderCell>UserName</CTableHeaderCell>
          <CTableHeaderCell>FullName</CTableHeaderCell>
          <CTableHeaderCell>Email</CTableHeaderCell>
          <CTableHeaderCell>Role</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {data.map((item, index) => {
          // Kiểm tra nếu item không phải là "ADMIN" hoặc là "ADMIN" nhưng là user hiện tại
          const isVisible = item.role_id.title !== "ADMIN";

          return (
            isVisible && (
              <CTableRow key={index}>
                <CTableDataCell>{index + 1}</CTableDataCell>
                <CTableDataCell>{item.username}</CTableDataCell>
                <CTableDataCell>{item.fullName}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>{item.role_id.title}</CTableDataCell>
                <CTableDataCell>
                  {item.status === true ? (
                    <CBadge color="success">Active</CBadge>
                  ) : (
                    <CBadge color="danger">Banned</CBadge>
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {onUpdate && (
                    <CButton color="success" onClick={() => onUpdate(item)}>
                      Detail
                    </CButton>
                  )}{" "}
                  {onDelete && (
                    <CButton color="danger" onClick={() => onDelete(item)}>
                      Delete
                    </CButton>
                  )}
                </CTableDataCell>
              </CTableRow>
            )
          );
        })}
      </CTableBody>
    </CTable>
  );
};

TableAccount.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role_id: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      status: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TableAccount;
