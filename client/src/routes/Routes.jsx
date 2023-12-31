/* eslint-disable no-unused-vars */
// import NotFoundPage from "../pages/NotFoundPage";
import ChangePasswordPage from "../pages/Auth/changePassword/ChangePasswordPage";
import ForgotPasswordPage from "../pages/Auth/forgotPassword/ForgotPasswordPage";
import LoginPage from "../pages/Auth/login/LoginPage";
import RegisterPage from "../pages/Auth/register/RegisterPage";
import VerifyPage from "../pages/Auth/verify/VerifyPage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import AuthorDetailsPage from "../pages/authorDetails/AuthorDetailsPage";
import BasketPage from "../pages/basket/BasketPage";
import BooksPage from "../pages/books/BooksPage";
import BooksDetailsPage from "../pages/booksDetails/BooksDetailsPage";
import ContactUsPage from "../pages/contactUs/ContactUsPage";
import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import QuizPage from "../pages/quiz/QuizPage";
import WishlistPage from "../pages/wishlist/WishlistPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import OrderPage from "../pages/order/OrderPage";
import UserRoute from "./UserRoute";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    // DONE
  },
  {
    path: "/books",
    element: <BooksPage />,
    // DONE
  },
  {
    path: "/contactUs",
    element: <ContactUsPage />,
    // DONE
  },
  {
    path: "/aboutUs",
    element: <AboutUsPage />,
    // DONE
  },
  {
    path: "/login",
    element: <LoginPage />,
    // DONE
  },
  {
    path: "/register",
    element: <RegisterPage />,
    // DONE
  },
  {
    path: "/verify",
    element: <VerifyPage />,
    // DONE
  },
  {
    path: "/forgotPassword",
    element: <ForgotPasswordPage />,
    // DONE
  },
  {
    path: "/changePassword",
    element: <ChangePasswordPage />,
    // DONE
  },
  {
    path: "/booksDetails/:id",
    element: <BooksDetailsPage />,
    // DONE
  },
  {
    path: "/authorDetails/:id",
    element: <AuthorDetailsPage />,
    // DONE
  },
  {
    path: "/profilePage",
    element: <ProfilePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
    // DONE
  },
  {
    path: "/order",
    element: <OrderPage />,
    // DONE
  },
  {
    path: "*",
    element: <NotFoundPage />,
    // DONE
  },
];
