/* eslint-disable react/prop-types */
import NotFoundPage from "../pages/notFound/NotFoundPage";

const AdminRoute = ({ isAdmin, children }) => {
  if (isAdmin) {
    return children;
  }

  return <NotFoundPage />;
};

export default AdminRoute;
