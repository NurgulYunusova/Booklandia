import "./intermediatePart.scss";
import img from "../../assets/images/intermediatePart.jpg";
import { useNavigate } from "react-router-dom";

function IntermediatePart() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="intermediatePart">
        <div className="intermediatePartContainer">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="texts">
            <h1>We provide you the experience</h1>
            <div className="divider"></div>
            <p>
              Browse the collection of our best selling and top interesting
              books.
            </p>
            <button onClick={() => handleClick()}>SEE OUR BOOKS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntermediatePart;
