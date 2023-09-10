/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:8080/api/book");

    if (response.status == 200) {
      setBooks(response.data);
    }
  };

  return (
    <BookContext.Provider value={{ books, getBooks }}>
      {children}
    </BookContext.Provider>
  );
};
