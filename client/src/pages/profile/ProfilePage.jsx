/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

function ProfilePage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <div className="profile">
        <div className="profileContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>PROFILE</p>
            </div>
          </div>

          <div className="bottom">
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
                  label="Personal Data"
                  className="tab"
                  style={{
                    color: activeTab === 0 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 0 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Orders"
                  className="tab"
                  style={{
                    color: activeTab === 1 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 1 ? "bold" : "normal",
                  }}
                />
              </Tabs>

              <div className="tabContent">
                {activeTab === 0 && (
                  <div>
                    <p>User's personal data goes here...</p>
                  </div>
                )}

                {activeTab === 1 && (
                  <div>
                    <p>User's orders go here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
