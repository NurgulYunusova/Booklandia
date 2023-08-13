/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import "./notFound.scss";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="notFound">
        <div className="notFoundContainer">
          <div className="error">404</div>
          <h1>OOPS! THAT PAGE CAN'T BE FOUND</h1>
          <p>
            It looks like nothing was found at this location. You can either go
            back to the last page or go to homepage.
          </p>
          <button onClick={() => handleClick()}>HOME PAGE</button>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
