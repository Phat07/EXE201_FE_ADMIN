import PropTypes from "prop-types";
import React, { useState } from "react";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay } from "@coreui/icons";

const DocsExample = (props) => {
  const { children } = props;
  // State để quản lý tab hiện tại
  const [activeTab, setActiveTab] = useState("chuaDienRa");

  // Hàm để thay đổi tab hiện tại
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            onClick={() => changeTab("chuaDienRa")}
            active={activeTab === "chuaDienRa"}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Chưa diễn ra
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => changeTab("sapDienRa")}
            active={activeTab === "sapDienRa"}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Sắp diễn ra
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => changeTab("dangDienRa")}
            active={activeTab === "dangDienRa"}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Đang diễn ra
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible={activeTab === "chuaDienRa"}>
          {/* Nội dung cho tab Chưa diễn ra */}
          {activeTab === "chuaDienRa" && <div>Content for Chưa diễn ra</div>}
        </CTabPane>
        <CTabPane className="p-3 preview" visible={activeTab === "sapDienRa"}>
          {/* Nội dung cho tab Sắp diễn ra */}
          {activeTab === "sapDienRa" && <div>Content for Sắp diễn ra</div>}
        </CTabPane>
        <CTabPane className="p-3 preview" visible={activeTab === "dangDienRa"}>
          {/* Nội dung cho tab Đang diễn ra */}
          {activeTab === "dangDienRa" && <div>Content for Đang diễn ra</div>}
        </CTabPane>
      </CTabContent>
    </div>
  );
};

DocsExample.propTypes = {
  children: PropTypes.node,
};

export default React.memo(DocsExample);
