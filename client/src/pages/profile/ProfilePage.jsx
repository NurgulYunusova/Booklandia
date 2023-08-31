/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import moment from "moment";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [orders, setOrders] = useState([]);

  const userProfileSchema = Yup.object({
    name: Yup.string().max(20, "Maximum 30 character"),
    email: Yup.string().email("Invalid email"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d).+/,
        "Password must start with an uppercase letter and contain at least one number"
      )
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    profileImage: Yup.mixed().test(
      "fileType",
      "Unsupported File Format",
      (value) => {
        if (!value) return true;
        const supportedFormats = ["image/jpeg", "image/png", "image/jpg"];
        return supportedFormats.includes(value.type);
      }
    ),
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFieldValue("profileImage", selectedFile);
  };

  const { handleSubmit, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
      },
      validationSchema: userProfileSchema,
      onSubmit: async ({ name, email, password, profileImage }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("photo", profileImage);

        await axios
          .put(`http://localhost:8080/api/user/profile/${user._id}`, formData)
          .then((res) => {
            if (res.status == 200) {
              alert("Profile successfully edited");
              setIsEditMode(false);
              updateUser();
              console.log(res.data);
            }
          });
      },
    });

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/order/${user?._id}`)
      .then((res) => setOrders(res.data));
  }, [user]);

  if (orders) {
    console.log(orders);
  }

  return (
    <>
      <Header />
      <Pages />
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
                      {isEditMode ? (
                        <form onSubmit={handleSubmit}>
                          <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={values.name}
                          />
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "10px",
                            }}
                          >
                            {errors?.name}
                          </p>

                          <br />

                          <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                          />
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "10px",
                            }}
                          >
                            {errors?.email}
                          </p>

                          <br />

                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                          />
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "10px",
                            }}
                          >
                            {errors?.password}
                          </p>

                          <br />

                          <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            value={values.confirmPassword}
                          />
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "10px",
                            }}
                          >
                            {errors?.confirmPassword}
                          </p>

                          <div>
                            <p>Profile image</p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </div>

                          <button type="submit">Save</button>
                        </form>
                      ) : (
                        <div className="infos">
                          <div className="dataNames">
                            <p>Name</p>
                            <p>Email</p>
                            <p>Password</p>
                          </div>
                          <div className="datas">
                            <p>{user?.name}</p>
                            <p>{user?.email}</p>
                            <p>*********</p>
                          </div>
                        </div>
                      )}

                      <div className="editButton">
                        <button onClick={() => setIsEditMode(!isEditMode)}>
                          {isEditMode ? "Cancel" : "EDIT PROFILE"}
                        </button>
                      </div>
                    </div>

                    <div className="rightSide">
                      {isEditMode ? (
                        <></>
                      ) : (
                        <>
                          <p>Profile image</p>
                          {user?.profileImage !== null ? (
                            <img src={user?.profileImage} alt={user?.name} />
                          ) : (
                            <img
                              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                              alt={user?.name}
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="orders">
                    {orders &&
                      orders.map((q) => (
                        <div className="order" key={q._id}>
                          <div className="images">
                            {q.books.map((book) => (
                              <img
                                src={book.book.image}
                                alt=""
                                key={book._id}
                              />
                            ))}
                          </div>

                          <div className="infosAboutOrder">
                            <div className="orderNumber">
                              <h4>Order number</h4>
                              <p>{q.orderNumber}</p>
                            </div>

                            <div className="orderDate">
                              <h4>Order date</h4>
                              <p>{moment(q.createdAt).format("D MMMM YYYY")}</p>
                            </div>

                            <div className="total">
                              <h4>Total</h4>
                              <p>${q.totalPrice.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
