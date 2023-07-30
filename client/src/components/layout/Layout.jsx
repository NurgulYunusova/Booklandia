/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Pages from "../pages/Pages";

function Layout({ children }) {
  return (
    <div>
      {/* <Header />
      <Pages /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
