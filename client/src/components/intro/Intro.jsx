import Slider from "../slider/Slider";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import "./intro.scss";
import { useNavigate } from "react-router-dom";

function Intro() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="intro">
        <div className="introContainer">
          <div className="firstSide">
            <h1>The easiest way to find the best book!</h1>
            <p>Not sure what to read next? Explore our catalog of books.</p>
            <button onClick={() => handleClick()}>
              EXPLORE NOW
              <span style={{ display: "flex", alignItems: "center" }}>
                <ArrowOutwardOutlinedIcon className="arrow" />
              </span>
            </button>
          </div>

          <div className="secondSide">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
