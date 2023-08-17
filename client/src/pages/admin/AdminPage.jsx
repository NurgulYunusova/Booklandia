/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import axios from "axios";
import { BookContext } from "../../context/BookContext";
import "./admin.scss";

function AdminPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [users, setUsers] = useState([]);
  const { books } = useContext(BookContext);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

  console.log(books);

  const token = localStorage.getItem("token");

  const getUsers = async () => {
    axios
      .get("http://localhost:8080/api/user", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, [token]);

  return (
    <>
      <div className="admin">
        <div className="adminContainer">
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
            </div>
          </div>

          <div className="rightSide">
            <div className="tabContent">
              {activeTab === 0 && (
                <div className="users">
                  <div className="top">
                    <button>NEW USER</button>
                  </div>

                  <div className="bottom">
                    <h2>Users List</h2>
                    <div className="table">
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users &&
                            users.map((user) => (
                              <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? "Yes" : "No"}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="products">
                  <div className="top">
                    <button>NEW PRODUCT</button>
                  </div>

                  <div className="bottom">
                    <h2>Products List</h2>
                    <div className="table">
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>NAME & AUTHOR</th>
                            <th>CATEGORY</th>
                            <th>RATING</th>
                          </tr>
                        </thead>
                        <tbody>
                          {books &&
                            books.map((book) => (
                              <tr key={book._id}>
                                <td>{book._id}</td>
                                <td>
                                  {book.name} - {book.author.name}
                                </td>
                                <td>{book.category.name}</td>
                                <td>{book.averageRating}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && <div className="orders"></div>}

              {activeTab === 3 && <div className="account"></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
