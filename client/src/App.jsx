import { routes } from "./routes/Routes";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AdminRoute from "./routes/AdminRoute";
import AdminPage from "./pages/admin/AdminPage";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

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
      </Routes>
    </>
  );
}

export default App;
