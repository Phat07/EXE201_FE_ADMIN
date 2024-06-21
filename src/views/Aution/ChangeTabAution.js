import PropTypes from "prop-types";
import React, { useState } from "react";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay } from "@coreui/icons";

const ChangeTabAution = (props) => {
  const {
    chuaDienRaContent,
    sapDienRaContent,
    dangDienRaContent,
    daDienRaContent,
  } = props;
  // State để quản lý tab hiện tại
  const [activeTab, setActiveTab] = useState("chuaDienRa");
  console.log(activeTab);

  // Hàm để thay đổi tab hiện tại
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Xác định nội dung để hiển thị dựa trên tab đang được chọn
  let contentToDisplay;
  switch (activeTab) {
    case "chuaDienRa":
      contentToDisplay = chuaDienRaContent;
      break;
    case "sapDienRa":
      contentToDisplay = sapDienRaContent;
      break;
    case "dangDienRa":
      contentToDisplay = dangDienRaContent;
      break;
    case "daDienRa":
      contentToDisplay = daDienRaContent;
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
            active={activeTab === "chuaDienRa"}
            onClick={() => changeTab("chuaDienRa")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Chưa diễn ra
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "sapDienRa"}
            onClick={() => changeTab("sapDienRa")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Sắp diễn ra
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "dangDienRa"}
            onClick={() => changeTab("dangDienRa")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Đang diễn ra
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "daDienRa"}
            onClick={() => changeTab("daDienRa")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Đã diễn ra
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

ChangeTabAution.propTypes = {
  chuaDienRaContent: PropTypes.node,
  sapDienRaContent: PropTypes.node,
  dangDienRaContent: PropTypes.node,
  daDienRaContent: PropTypes.node,
};

export default React.memo(ChangeTabAution);
