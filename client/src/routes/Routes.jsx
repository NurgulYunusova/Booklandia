// import NotFoundPage from "../pages/NotFoundPage";
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
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
];
