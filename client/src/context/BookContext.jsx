/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/book")
      .then((res) => setBooks(res.data));
  }, []);

  console.log(books);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};
