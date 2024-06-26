import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonInformation } from "src/store/salon/action";
import TableReport from "src/views/Report/TableReport";
const ChangeTabReport = (props) => {
  const {} = props;
  const token = localStorage.getItem("ACCESS_TOKEN");
  const reportInformation = {
    items: [
      {
        salonOwner: {
          fullName: "Nguyễn Văn A",
        },
        customer: {
          fullName: "Phạm Văn B",
        },
        salonInformation: {
          name: "Demo Salon 1",
        },
        createDate: "2024-06-26T08:00:34.808Z",
        timeConfirm: "2024-06-26T08:00:34.808Z",
        status: "REPORT FROM CUSTOMER",
      },
      {
        salonOwner: {
          fullName: "Lê Thị C",
        },
        customer: {
          fullName: "Trần Văn D",
        },
        salonInformation: {
          name: "Demo Salon 2",
        },
        createDate: "2024-06-27T09:30:00.123Z",
        timeConfirm: "2024-06-27T09:45:00.456Z",
        status: "REPORT FROM CUSTOMER",
      },
      {
        salonOwner: {
          fullName: "Đỗ Thị E",
        },
        customer: {
          fullName: "Ngô Văn F",
        },
        salonInformation: {
          name: "Demo Salon 3",
        },
        createDate: "2024-06-28T10:15:20.789Z",
        timeConfirm: "2024-06-28T10:30:20.789Z",
        status: "REPORT FROM CUSTOMER",
      },
      {
        salonOwner: {
          fullName: "Phan Thị G",
        },
        customer: {
          fullName: "Hoàng Văn H",
        },
        salonInformation: {
          name: "Demo Salon 4",
        },
        createDate: "2024-06-29T11:20:30.123Z",
        timeConfirm: "2024-06-29T11:35:30.456Z",
        status: "REPORT FROM SALON OWNER",
      },
      {
        salonOwner: {
          fullName: "Nguyễn Thị I",
        },
        customer: {
          fullName: "Lưu Văn J",
        },
        salonInformation: {
          name: "Demo Salon 5",
        },
        createDate: "2024-06-30T12:40:50.789Z",
        timeConfirm: "2024-06-30T12:55:50.101Z",
        status: "REPORT FROM SALON OWNER",
      },
    ],
    page: 1,
    size: 10,
    total: 5,
    totalPages: 1,
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("REPORT FROM CUSTOMER");
  console.log(activeTab);
  useEffect(() => {}, [activeTab, currentPage, itemsPerPage]);
  const navigate = useNavigate();

  const filterByStatus = (status) => {
    return reportInformation?.items?.filter((salon) => salon.status === status);
  };
  // State để quản lý tab hiện tại

  // Hàm để thay đổi tab hiện tại
  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
    setItemsPerPage(10);
  };

  // Xác định nội dung để hiển thị dựa trên tab đang được chọn
  let contentToDisplay;
  switch (activeTab) {
    case "REPORT FROM CUSTOMER":
      const dataFromCustomer = filterByStatus("REPORT FROM CUSTOMER");
      contentToDisplay = (
        <div>
          {
            <TableReport
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={dataFromCustomer}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {reportInformation.page}
            </p>
            <CButton
              disabled={currentPage === reportInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
          </div>
        </div>
      );
      break;
    case "REPORT FROM SALON OWNER":
      const dataFromSalonOwner = filterByStatus("REPORT FROM SALON OWNER");
      contentToDisplay = (
        <div>
          {
            <TableReport
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={dataFromSalonOwner}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {reportInformation.page}
            </p>
            <CButton
              disabled={currentPage === reportInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    default:
      contentToDisplay = <div>Không có nội dung</div>;
  }

  if (contentToDisplay === undefined) {
    contentToDisplay = <div>Không có dữ liệu</div>;
  }
  console.log(contentToDisplay.props.children);
  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            active={activeTab === "REPORT FROM CUSTOMER"}
            onClick={() => changeTab("REPORT FROM CUSTOMER")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            REPORT FROM CUSTOMER
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "REPORT FROM SALON OWNER"}
            onClick={() => changeTab("REPORT FROM SALON OWNER")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            REPORT FROM SALON OWNER
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane visible className="p-3 preview">
          {contentToDisplay}
        </CTabPane>
      </CTabContent>
    </div>
  );
};

ChangeTabReport.propTypes = {};

export default React.memo(ChangeTabReport);
