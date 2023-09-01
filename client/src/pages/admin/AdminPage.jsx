/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import axios from "axios";
import { BookContext } from "../../context/BookContext";
import { UserContext } from "../../context/UserContext";
import "./admin.scss";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import * as Yup from "yup";
import { useFormik } from "formik";

function AdminPage() {
  const { books, getBooks } = useContext(BookContext);
  const { user, updateUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState(0);
  const [isUserEditMode, setIsUserEditMode] = useState(false);
  // DATA
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  // CATEGORY
  const [isClickedCategory, setIsClickedCategory] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryEditOpen, setCategoryEditOpen] = useState(false);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  // AUTHOR
  const [isClickedAuthor, setIsClickedAuthor] = useState(false);
  const [authorName, setAuthorName] = useState("");
  const [authorAbout, setAuthorAbout] = useState("");
  const [authorImage, setAuthorImage] = useState(null);
  const [authorEditOpen, setAuthorEditOpen] = useState(false);
  const [editedAuthorName, setEditedAuthorName] = useState("");
  const [editedAuthorAbout, setEditedAuthorAbout] = useState("");
  const [editingAuthorId, setEditingAuthorId] = useState(null);
  const [editedAuthorImage, setEditedAuthorImage] = useState(null);
  // PRODUCT
  const [isClickedProduct, setIsClickedProduct] = useState(false);
  const [bookName, setBookName] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookIsbn, setBookIsbn] = useState(0);
  const [bookPages, setBookPages] = useState(0);
  const [bookPrice, setBookPrice] = useState(0);
  const [bookLanguage, setBookLanguage] = useState("");
  const [bookImage, setBookImage] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [bookEditOpen, setBookEditOpen] = useState(false);
  const [editedBookName, setEditedBookName] = useState("");
  const [editedBookDescription, setEditedBookDescription] = useState("");
  const [editingBookId, setEditingBookId] = useState(null);
  const [editedBookImage, setEditedBookImage] = useState(null);
  // USER
  const [userEditOpen, setUserEditOpen] = useState(false);
  const [editedUserIsAdmin, setEditedUserIsAdmin] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  const token = localStorage.getItem("token");

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
  };

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
    console.log(selectedFile);
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
              setIsUserEditMode(false);
              updateUser();
              console.log(res.data);
            }
          });
      },
    });

  // GET DATAS
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
        console.log(authors);
      })
      .catch((error) => {
        console.error("Error fetching authors", error);
      });
  };

  // CATEGORY
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

  const openCategoryModal = (category) => {
    setEditedCategoryName(category.name);
    setEditingCategoryId(category._id);
    setCategoryEditOpen(true);
  };

  const closeCategoryModal = () => {
    setEditedCategoryName("");
    setEditingCategoryId(null);
    setCategoryEditOpen(false);
  };

  const handleEditCategorySubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: editedCategoryName,
    };

    const response = await axios.put(
      `http://localhost:8080/api/category/${editingCategoryId}`,
      updatedData
    );

    console.log(response);
    if (response.status === 200) {
      alert(response.data.message);
    }

    closeCategoryModal();
    getCategories();
  };

  // USER
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

  const openUserModal = (user) => {
    setEditedUserIsAdmin(user.isAdmin);
    setEditingUserId(user._id);
    setUserEditOpen(true);
  };

  const closeUserModal = () => {
    setEditedUserIsAdmin("");
    setEditingUserId(null);
    setUserEditOpen(false);
  };

  const handleEditUserSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.put(
      `http://localhost:8080/api/user/${editingUserId}`,
      { isAdmin: editedUserIsAdmin === "true" },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status === 200) {
      alert(response.data.message);
    }

    closeUserModal();
    getUsers();
  };

  // PRODUCT
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", bookName);
    formData.append("author", selectedAuthor);
    formData.append("description", bookDescription);
    formData.append("category", selectedCategory);
    formData.append("isbn", +bookIsbn);
    formData.append("pages", +bookPages);
    formData.append("price", +bookPrice);
    formData.append("language", bookLanguage);
    formData.append("photo", bookImage);

    const response = await axios.post(
      "http://localhost:8080/api/book",
      formData
    );

    if (response.status == 201) {
      alert(response.data.message);
      setIsClickedProduct(false);
      setBookName("");
      setBookDescription("");
      setBookIsbn("");
      setBookPages(0);
      setBookLanguage("");
      setSelectedAuthor("");
      setSelectedCategory("");
      setBookImage(null);
      getBooks();
    }
  };

  const deleteProduct = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/book/${id}`);

    if (response.status == 200) {
      alert(response.data.message);
      getBooks();
    }
  };

  const openBookModal = (book) => {
    setEditedBookName(book.name);
    setEditedBookDescription(book.description);
    setEditedBookImage(book.image);
    setEditingBookId(book._id);
    setBookEditOpen(true);
  };

  const closeBookModal = () => {
    setEditedBookName("");
    setEditedBookDescription("");
    setEditedBookImage(null);
    setEditingBookId(null);
    setBookEditOpen(false);
  };

  const handleEditBookSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: editedBookName,
      description: editedBookDescription,
      // image: editedAuthorImage.name,
    };

    const response = await axios.put(
      `http://localhost:8080/api/author/${editingAuthorId}`,
      updatedData
    );

    console.log(response);
    if (response.status === 200) {
      alert(response.data.message);
    }

    closeAuthorModal();
    getAuthors();
  };

  // AUTHOR
  const handleAuthorSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", authorName);
    formData.append("about", authorAbout);
    formData.append("photo", authorImage);

    const response = await axios.post(
      "http://localhost:8080/api/author",
      formData
    );

    if (response.status == 200) {
      alert(response.data.message);
      setIsClickedAuthor(false);
      setAuthorName("");
      setAuthorAbout("");
      setAuthorImage(null);
      getAuthors();
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

  const openAuthorModal = (author) => {
    setEditedAuthorName(author.name);
    setEditedAuthorAbout(author.about);
    setEditedAuthorImage(author.image);
    setEditingAuthorId(author._id);
    setAuthorEditOpen(true);
  };

  const closeAuthorModal = () => {
    setEditedAuthorName("");
    setEditedAuthorAbout("");
    setEditedAuthorImage(null);
    setEditingAuthorId(null);
    setAuthorEditOpen(false);
  };

  const handleEditAuthorSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", editedAuthorName);
    formData.append("about", editedAuthorAbout);
    formData.append("photo", editedAuthorImage);

    const response = await axios.put(
      `http://localhost:8080/api/author/${editingAuthorId}`,
      formData
    );

    if (response.status === 200) {
      alert(response.data.message);
    }

    closeAuthorModal();
    getAuthors();
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
                  {userEditOpen ? (
                    <>
                      <h2>Edit User</h2>
                      <form onSubmit={handleEditUserSubmit}>
                        <label htmlFor="values">Is User Admin?</label>
                        <select
                          onChange={(e) => setEditedUserIsAdmin(e.target.value)}
                          value={editedUserIsAdmin}
                          name="values"
                          id="values"
                        >
                          <option value="false">no</option>
                          <option value="true">yes</option>
                        </select>

                        <br />

                        <div className="buttons">
                          <a onClick={closeUserModal}>cancel</a>
                          <button type="submit">SAVE</button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
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
                                      className="edit"
                                      onClick={() => openUserModal(user)}
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
                    </>
                  )}
                </div>
              )}

              {activeTab === 1 && (
                <div className="products">
                  <div className="top">
                    {isClickedProduct ? (
                      <div className="newProduct">
                        <h3>New Product</h3>

                        <form onSubmit={handleProductSubmit}>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name *"
                            required
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                          />

                          <br />

                          <div className="selectedDiv">
                            <label htmlFor="authors">Author: </label>

                            <select
                              onChange={(e) =>
                                setSelectedAuthor(e.target.value)
                              }
                              value={selectedAuthor}
                              name="authors"
                              id="authors"
                            >
                              {authors &&
                                authors.map((q) => (
                                  <option value={q._id} key={q._id}>
                                    {q.name}
                                  </option>
                                ))}
                            </select>
                          </div>

                          <br />

                          <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            required
                            placeholder="Description *"
                            onChange={(e) => setBookDescription(e.target.value)}
                          ></textarea>

                          <br />

                          <input
                            type="number"
                            name="isbn"
                            id="isbn"
                            placeholder="ISBN *"
                            required
                            value={bookIsbn}
                            onChange={(e) => setBookIsbn(e.target.value)}
                          />

                          <br />

                          <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Price *"
                            required
                            value={bookPrice}
                            onChange={(e) => setBookPrice(e.target.value)}
                          />

                          <br />

                          <div className="selectedDiv">
                            <label htmlFor="categories">Category: </label>

                            <select
                              onChange={(e) =>
                                setSelectedCategory(e.target.value)
                              }
                              value={selectedCategory}
                              name="categories"
                              id="categories"
                            >
                              {categories &&
                                categories.map((q) => (
                                  <option value={q._id} key={q._id}>
                                    {q.name}
                                  </option>
                                ))}
                            </select>
                          </div>

                          <br />

                          <input
                            type="number"
                            name="pages"
                            id="pages"
                            placeholder="Pages *"
                            required
                            value={bookPages}
                            onChange={(e) => setBookPages(e.target.value)}
                          />

                          <br />

                          <input
                            type="text"
                            name="language"
                            id="language"
                            placeholder="Language *"
                            required
                            value={bookLanguage}
                            onChange={(e) => setBookLanguage(e.target.value)}
                          />

                          <br />

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setBookImage(e.target.files[0])}
                          />

                          <br />

                          <div className="buttons">
                            <a onClick={() => setIsClickedProduct(false)}>
                              back
                            </a>
                            <button type="submit">CREATE</button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <button onClick={() => setIsClickedProduct(true)}>
                        NEW PRODUCT
                      </button>
                    )}
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
                            <th>IMAGE</th>
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
                                  <button className="edit">
                                    <EditIcon />
                                  </button>
                                </td>
                                <td>{book._id}</td>
                                <td>
                                  <p>{book.name}</p>
                                  <p>{book.author.name}</p>
                                </td>
                                <td>{book.category.name}</td>
                                <td>
                                  <img
                                    src={`http://localhost:8080/${book.image}`}
                                    alt={book.name}
                                    className="bookImage"
                                  />
                                </td>
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
                    {categoryEditOpen ? (
                      <>
                        <h2>Edit Category</h2>
                        <form onSubmit={handleEditCategorySubmit}>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Category Name *"
                            required
                            value={editedCategoryName}
                            onChange={(e) =>
                              setEditedCategoryName(e.target.value)
                            }
                          />

                          <br />

                          <div className="buttons">
                            <a onClick={closeCategoryModal}>cancel</a>
                            <button type="submit">SAVE</button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
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
                                        onClick={() =>
                                          deleteCategory(category._id)
                                        }
                                        className="delete"
                                      >
                                        <DeleteIcon />
                                      </button>
                                    </td>
                                    <td className="editColumn">
                                      <button
                                        onClick={() =>
                                          openCategoryModal(category)
                                        }
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
                      </>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="authors">
                  <div className="top">
                    {isClickedAuthor ? (
                      <div className="newAuthor">
                        <h3>New Author</h3>

                        <form onSubmit={handleAuthorSubmit}>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Author name *"
                            required
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                          />

                          <br />

                          <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            required
                            placeholder="About *"
                            onChange={(e) => setAuthorAbout(e.target.value)}
                          ></textarea>

                          <br />

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAuthorImage(e.target.files[0])}
                          />

                          <br />

                          <div className="buttons">
                            <a onClick={() => setIsClickedAuthor(false)}>
                              back
                            </a>
                            <button type="submit">CREATE</button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <button onClick={() => setIsClickedAuthor(true)}>
                        NEW AUTHOR
                      </button>
                    )}
                  </div>

                  <div className="bottom">
                    {authorEditOpen ? (
                      <>
                        <h2>Edit Author</h2>
                        <form onSubmit={handleEditAuthorSubmit}>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Author Name *"
                            required
                            value={editedAuthorName}
                            onChange={(e) =>
                              setEditedAuthorName(e.target.value)
                            }
                          />

                          <br />

                          <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            required
                            value={editedAuthorAbout}
                            placeholder="About *"
                            onChange={(e) =>
                              setEditedAuthorAbout(e.target.value)
                            }
                          ></textarea>

                          <br />

                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              setEditedAuthorImage(e.target.files[0])
                            }
                          />

                          <br />

                          <div className="buttons">
                            <a onClick={closeAuthorModal}>cancel</a>
                            <button type="submit">SAVE</button>
                          </div>
                        </form>
                      </>
                    ) : (
                      <>
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
                                        className="edit"
                                        onClick={() => openAuthorModal(author)}
                                      >
                                        <EditIcon />
                                      </button>
                                    </td>
                                    <td>{author._id}</td>
                                    <td>{author.name}</td>
                                    <td>
                                      <img
                                        src={author.image}
                                        alt={author.name}
                                        className="authorImage"
                                      />
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
                      </>
                    )}
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

              {activeTab === 5 && (
                <div className="account">
                  <div className="accountLeftSide">
                    {isUserEditMode ? (
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
                      <button
                        onClick={() => setIsUserEditMode(!isUserEditMode)}
                      >
                        {isUserEditMode ? "Cancel" : "EDIT PROFILE"}
                      </button>
                    </div>
                  </div>

                  <div className="accountRightSide">
                    {isUserEditMode ? (
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
