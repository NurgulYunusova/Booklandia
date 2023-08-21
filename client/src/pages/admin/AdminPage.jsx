/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import axios from "axios";
import { BookContext } from "../../context/BookContext";
import "./admin.scss";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function AdminPage() {
  const { books, getBooks } = useContext(BookContext);
  const [activeTab, setActiveTab] = useState(0);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isClickedCategory, setIsClickedCategory] = useState(false);
  const [categoryName, setCategoryName] = useState([]);

  const token = localStorage.getItem("token");

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

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

  const getOrders = async () => {
    axios
      .get("http://localhost:8080/api/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  };

  const getCategories = async () => {
    axios
      .get("http://localhost:8080/api/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  };

  const getAuthors = async () => {
    axios
      .get("http://localhost:8080/api/author")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching authors", error);
      });
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/api/category", {
      name: categoryName,
    });

    if (response.status == 201) {
      alert("New category added succesfully");
      setIsClickedCategory(false);
      setCategoryName("");
      getCategories();
    }
  };

  const deleteCategory = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/category/${id}`
    );

    if (response.status == 200) {
      alert(response.data.message);
      getCategories();
    }
  };

  const deleteUser = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/user/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status == 200) {
      alert("User deleted succesfully");
      getUsers();
    }
  };

  const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/book/${id}`);

    if (response.status == 200) {
      alert(response.data.message);
      getBooks();
    }
  };

  const deleteAuthor = async (id) => {
    const response = await axios.delete(
      `http://localhost:8080/api/author/${id}`
    );

    if (response.status == 200) {
      alert(response.data.message);
      getAuthors();
    }
  };

  useEffect(() => {
    getUsers();
    getOrders();
    getCategories();
    getAuthors();
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
                  label="Categories"
                  className="tab"
                  style={{
                    color: activeTab === 2 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 2 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Authors"
                  className="tab"
                  style={{
                    color: activeTab === 3 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 3 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="Orders"
                  className="tab"
                  style={{
                    color: activeTab === 4 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 4 ? "bold" : "normal",
                  }}
                />
                <Tab
                  label="My Account"
                  className="tab"
                  style={{
                    color: activeTab === 5 ? "#003366" : "#001a40",
                    fontWeight: activeTab === 5 ? "bold" : "normal",
                  }}
                />
              </Tabs>
            </div>
          </div>

          <div className="rightSide">
            <div className="tabContent">
              {activeTab === 0 && (
                <div className="users">
                  <h2>Users List</h2>
                  <div className="table">
                    <table>
                      <thead>
                        <tr>
                          <th>DELETE</th>
                          <th>EDIT</th>
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
                              <td className="deleteColumn">
                                <button
                                  onClick={() => deleteUser(user._id)}
                                  className="delete"
                                >
                                  <DeleteIcon />
                                </button>
                              </td>
                              <td className="editColumn">
                                <button
                                  onClick={() => editUser(user._id)}
                                  className="edit"
                                >
                                  <EditIcon />
                                </button>
                              </td>
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
                            <th>DELETE</th>
                            <th>EDIT</th>
                            <th>ID</th>
                            <th>NAME & AUTHOR</th>
                            <th>CATEGORY</th>
                            <th>RATING</th>
                            <th>PRICE</th>
                          </tr>
                        </thead>
                        <tbody>
                          {books &&
                            books.map((book) => (
                              <tr key={book._id}>
                                <td className="deleteColumn">
                                  <button
                                    onClick={() => deleteProduct(book._id)}
                                    className="delete"
                                  >
                                    <DeleteIcon />
                                  </button>
                                </td>
                                <td className="editColumn">
                                  <button
                                    onClick={() => editProduct(book._id)}
                                    className="edit"
                                  >
                                    <EditIcon />
                                  </button>
                                </td>
                                <td>{book._id}</td>
                                <td>
                                  <p>{book.name}</p>
                                  <p>{book.author.name}</p>
                                </td>
                                <td>{book.category.name}</td>
                                <td>{book.averageRating}</td>
                                <td>${book.price}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="categories">
                  <div className="top">
                    {isClickedCategory ? (
                      <div className="newCategory">
                        <h3>New Category</h3>

                        <form onSubmit={handleCategorySubmit}>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Category name *"
                            required
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                          />

                          <br />

                          <div className="buttons">
                            <a onClick={() => setIsClickedCategory(false)}>
                              back
                            </a>
                            <button type="submit">CREATE</button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <button onClick={() => setIsClickedCategory(true)}>
                        NEW CATEGORY
                      </button>
                    )}
                  </div>

                  <div className="bottom">
                    <h2>Categories List</h2>
                    <div className="table">
                      <table>
                        <thead>
                          <tr>
                            <th>DELETE</th>
                            <th>EDIT</th>
                            <th>ID</th>
                            <th>NAME</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories &&
                            categories.map((category) => (
                              <tr key={category._id}>
                                <td className="deleteColumn">
                                  <button
                                    onClick={() => deleteCategory(category._id)}
                                    className="delete"
                                  >
                                    <DeleteIcon />
                                  </button>
                                </td>
                                <td className="editColumn">
                                  <button
                                    onClick={() => editCategory(category._id)}
                                    className="edit"
                                  >
                                    <EditIcon />
                                  </button>
                                </td>
                                <td>{category._id}</td>
                                <td>{category.name}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="authors">
                  <div className="top">
                    <button>NEW AUTHOR</button>
                  </div>

                  <div className="bottom">
                    <h2>Authors List</h2>
                    <div className="table">
                      <table>
                        <thead>
                          <tr>
                            <th>DELETE</th>
                            <th>EDIT</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>IMAGE</th>
                            <th>AUTHOR'S BOOKS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {authors &&
                            authors.map((author) => (
                              <tr key={author._id}>
                                <td className="deleteColumn">
                                  <button
                                    onClick={() => deleteAuthor(author._id)}
                                    className="delete"
                                  >
                                    <DeleteIcon />
                                  </button>
                                </td>
                                <td className="editColumn">
                                  <button
                                    onClick={() => editAuthor(author._id)}
                                    className="edit"
                                  >
                                    <EditIcon />
                                  </button>
                                </td>
                                <td>{author._id}</td>
                                <td>{author.name}</td>
                                <td>
                                  <img src={author.image} alt={author.name} />
                                </td>
                                <td>
                                  {author.authorBooks.map((q) => (
                                    <p key={q._id}>{q.name}</p>
                                  ))}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 4 && (
                <div className="orders">
                  <h2>Orders List</h2>
                  <div className="table">
                    <table>
                      <thead>
                        <tr>
                          <th>DELETE</th>
                          <th>EDIT</th>
                          <th>ID</th>
                          <th>USER</th>
                          <th>BOOKS & QUANTITY</th>
                          <th>ADDRESS</th>
                          <th>TOTAL PRICE</th>
                          <th>ORDER DATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders &&
                          orders.map((order) => (
                            <tr key={order._id}>
                              <td className="deleteColumn">
                                <button
                                  onClick={() => deleteOrder(order._id)}
                                  className="delete"
                                >
                                  <DeleteIcon />
                                </button>
                              </td>
                              <td className="editColumn">
                                <button
                                  onClick={() => editOrder(order._id)}
                                  className="edit"
                                >
                                  <EditIcon />
                                </button>
                              </td>
                              <td>{order._id}</td>
                              <td>{order.user._id}</td>
                              <td>
                                {order.books?.map((book) => (
                                  <p key={book._id}>
                                    {book.book.name} -{" "}
                                    <span style={{ fontWeight: 500 }}>
                                      {book.quantity}
                                    </span>
                                  </p>
                                ))}
                              </td>
                              <td>{order.address}</td>
                              <td>${order.totalPrice.toFixed(2)}</td>
                              <td>
                                {moment(order.createdAt).format(
                                  "D MMMM YYYY HH:mm"
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 5 && <div className="account"></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
