import { routes } from "./routes/Routes";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AdminRoute from "./routes/AdminRoute";
import AdminPage from "./pages/admin/AdminPage";
import { UserContext } from "./context/UserContext";
import UserRoute from "./routes/UserRoute";
import WishlistPage from "./pages/wishlist/WishlistPage";
import BasketPage from "./pages/basket/BasketPage";

function App() {
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <>
      <Routes>
        {routes &&
          routes.map((route, key) => {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          })}
        <Route
          path="/admin"
          element={
            <AdminRoute isAdmin={user?.isAdmin}>
              <AdminPage />
            </AdminRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <UserRoute isLoggedIn={isLoggedIn}>
              <WishlistPage />
            </UserRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <UserRoute isLoggedIn={isLoggedIn}>
              <BasketPage />
            </UserRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
