import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

function AdminPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <div className="adminPage">
        <div className="adminPageContainer">
          <div className="leftSide">
            <div className="logo">
              <h1>Booklandia.</h1>
            </div>
            <div className="verticalTabsContainer">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={activeTab}
                onChange={handleTabChange}
                aria-label="Vertical tabs"
                className="tabs"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#003366",
                  },
                }}
              >
                <Tab
                  label="Users"
                  className="tab"
                  style={{
                    color: activeTab === 0 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 0 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Products"
                  className="tab"
                  style={{
                    color: activeTab === 1 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 1 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Orders"
                  className="tab"
                  style={{
                    color: activeTab === 2 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 2 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="My Account"
                  className="tab"
                  style={{
                    color: activeTab === 3 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 3 ? "bold" : "normal",
                  }}
                />
              </Tabs>

              <div className="tabContent">
                {activeTab === 0 && <div className="users"></div>}

                {activeTab === 1 && <div className="products"></div>}

                {activeTab === 2 && <div className="orders"></div>}

                {activeTab === 3 && <div className="account"></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
