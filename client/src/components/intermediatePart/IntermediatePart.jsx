import "./intermediatePart.scss";
import img from "../../assets/images/intermediatePart.jpg";

function IntermediatePart() {
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
            <button>SEE OUR BOOKS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntermediatePart;
