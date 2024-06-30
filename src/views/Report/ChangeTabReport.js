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
import { GetAllReportByRoleName } from "src/store/request/action";
const ChangeTabReport = (props) => {
  const {} = props;
  const token = localStorage.getItem("ACCESS_TOKEN");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("Customer");
  const reportByRole = useSelector((state) => state.REQUEST.reportByRole);
  console.log(activeTab);
  console.log("reportByRole", reportByRole);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllReportByRoleName(activeTab, currentPage, itemsPerPage));
  }, [activeTab, currentPage, dispatch, itemsPerPage]);

  const navigate = useNavigate();
  const handleUpdateUser = (report) => {
    navigate(`/Report-detail/${report.id}`, {
      state: { reportDetail: report },
    });
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
    case "Customer":
      contentToDisplay = (
        <div>
          {
            <TableReport
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={reportByRole?.items}
              onUpdate={handleUpdateUser}
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
              {reportByRole.page}
            </p>
            <CButton
              disabled={currentPage === reportByRole?.totalPages}
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
    case "Salonowner":
      contentToDisplay = (
        <div>
          {
            <TableReport
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={reportByRole?.items}
              onUpdate={handleUpdateUser}
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
              {reportByRole.page}
            </p>
            <CButton
              disabled={currentPage === reportByRole?.totalPages}
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
            onClick={() => changeTab("Customer")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            REPORT FROM CUSTOMER
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "REPORT FROM SALON OWNER"}
            onClick={() => changeTab("Salonowner")}
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
