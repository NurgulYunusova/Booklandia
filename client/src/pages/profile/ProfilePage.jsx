/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import userImage from "../../assets/images/userImage.jpg";
import img from "../../assets/images/anna_karenina.jpg";

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
                  <div className="profile">
                    <div className="leftSide">
                      <div className="infos">
                        <div className="dataNames">
                          <p>Name</p>
                          <p>Email</p>
                          <p>Password</p>
                        </div>

                        <div className="datas">
                          <p>John</p>
                          <p>johndoe@gmail.com</p>
                          <p>*********</p>
                        </div>
                      </div>

                      <div className="editButton">
                        <button>EDIT PROFILE</button>
                      </div>
                    </div>

                    <div className="rightSide">
                      <p>Profile image</p>
                      <img src={userImage} alt="" />
                      <button>UPLOAD NEW</button>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="orders">
                    <div className="order">
                      <div className="images">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                      </div>

                      <div className="infosAboutOrder">
                        <div className="orderNumber">
                          <h4>Order number</h4>
                          <p>7681029</p>
                        </div>

                        <div className="orderDate">
                          <h4>Order date</h4>
                          <p>30 March 2019</p>
                        </div>

                        <div className="total">
                          <h4>Total</h4>
                          <p>$78.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="order">
                      <div className="images">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                      </div>

                      <div className="infosAboutOrder">
                        <div className="orderNumber">
                          <h4>Order number</h4>
                          <p>7681029</p>
                        </div>

                        <div className="orderDate">
                          <h4>Order date</h4>
                          <p>30 March 2019</p>
                        </div>

                        <div className="total">
                          <h4>Total</h4>
                          <p>$78.00</p>
                        </div>
                      </div>
                    </div>

                    <div className="order">
                      <div className="images">
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                      </div>

                      <div className="infosAboutOrder">
                        <div className="orderNumber">
                          <h4>Order number</h4>
                          <p>7681029</p>
                        </div>

                        <div className="orderDate">
                          <h4>Order date</h4>
                          <p>30 March 2019</p>
                        </div>

                        <div className="total">
                          <h4>Total</h4>
                          <p>$78.00</p>
                        </div>
                      </div>
                    </div>
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
