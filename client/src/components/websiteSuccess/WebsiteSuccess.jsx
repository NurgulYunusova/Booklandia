import "./websiteSuccess.scss";
import CountUp from "react-countup";

function WebsiteSuccess() {
  return (
    <>
      <div className="cards">
        <div className="cardsContainer">
          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <div className="numbers">
              <h2>
                <CountUp start={0} end={15254} duration={5} separator="," />
              </h2>
              <p>TOTAL BOOKS</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-user-group"></i>
            </div>
            <div className="numbers">
              <h2>
                <CountUp start={0} end={1287} duration={5} separator="," />
              </h2>
              <p>AUTHORS</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="numbers">
              <h2>
                <CountUp start={0} end={7589} duration={5} separator="," />
              </h2>
              <p>BOOKS SOLD</p>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <i className="fa-solid fa-face-smile-beam"></i>
            </div>
            <div className="numbers">
              <h2>
                <CountUp start={0} end={97} duration={5} />%
              </h2>
              <p>HAPPY CUSTOMER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteSuccess;
