import Slider from "../slider/Slider";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import "./intro.scss";

function Intro() {
  return (
    <>
      <div className="intro">
        <div className="introContainer">
          <div className="firstSide">
            <h1>The easiest way to find the best book!</h1>
            <p>Not sure what to read next? Explore our catalog of books.</p>
            <button>
              EXPLORE NOW
              <span style={{ display: "flex", alignItems: "center" }}>
                <ArrowOutwardOutlinedIcon />
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
