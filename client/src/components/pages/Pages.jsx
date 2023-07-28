import { useNavigate } from "react-router-dom";
import "./pages.scss";

function Pages() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pages">
        <div className="pagesContainer">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a onClick={() => navigate("/books")}>BOOKS</a>
            </li>
            <li>
              <a onClick={() => navigate("/contactUs")}>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Pages;
