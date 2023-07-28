// import NotFoundPage from "../pages/NotFoundPage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import BasketPage from "../pages/basket/BasketPage";
import BooksPage from "../pages/books/BooksPage";
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
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];
