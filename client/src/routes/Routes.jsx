// import NotFoundPage from "../pages/NotFoundPage";
import ChangePasswordPage from "../pages/Auth/changePassword/ChangePasswordPage";
import ForgotPasswordPage from "../pages/Auth/forgotPassword/ForgotPasswordPage";
import LoginPage from "../pages/Auth/login/LoginPage";
import RegisterPage from "../pages/Auth/register/RegisterPage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import BasketPage from "../pages/basket/BasketPage";
import BooksPage from "../pages/books/BooksPage";
import BooksDetailsPage from "../pages/booksDetails/BooksDetailsPage";
import ContactUsPage from "../pages/contactUs/ContactusPage";
import HomePage from "../pages/home/HomePage";
import WishlistPage from "../pages/wishlist/WishlistPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "/basket",
    element: <BasketPage />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
  {
    path: "/contactUs",
    element: <ContactUsPage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/changePassword",
    element: <ChangePasswordPage />,
  },
  {
    path: "/booksDetails",
    element: <BooksDetailsPage />,
  },

  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];
