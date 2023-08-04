import "./categories.scss";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  return (
    <>
      <div className="categories">
        <div className="categoriesContainer">
          <div className="row">
            <div className="col">
              <div className="box romance">
                <h4>Romance</h4>
              </div>
            </div>
            <div className="col big">
              <div className="box explore">
                <h3>Explore Our Top Categories</h3>
                <button onClick={() => navigate("/books")}>VIEW ALL</button>
              </div>
            </div>
            <div className="col">
              <div className="box thriller">
                <h4>Thriller</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="box fantasy">
                <h4>Fantasy</h4>
              </div>
            </div>
            <div className="col big">
              <div className="box history">
                <h4>History</h4>
              </div>
            </div>
            <div className="col">
              <div className="box selfHelp">
                <h4>Self-Help</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
