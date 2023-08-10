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
import ContactUsPage from "../pages/contactUs/ContactusPage";
import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import QuizPage from "../pages/quiz/QuizPage";
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
    path: "/verify",
    element: <VerifyPage />,
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
    path: "/booksDetails/:id",
    element: <BooksDetailsPage />,
  },
  {
    path: "/authorDetails/:id",
    element: <AuthorDetailsPage />,
  },
  {
    path: "/profilePage",
    element: <ProfilePage />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },

  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];
