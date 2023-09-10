import "./categories.scss";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate("/books", { state: { selectedCategory: category } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="categories">
        <div className="categoriesContainer">
          <div className="row">
            <div className="col" onClick={() => handleClick("Romance")}>
              <div className="box romance">
                <h4>Romance</h4>
              </div>
            </div>
            <div className="col big first">
              <div className="box explore">
                <h3>Explore Our Top Categories</h3>
                <button onClick={() => handleClick("All")}>VIEW ALL</button>
              </div>
            </div>
            <div className="col" onClick={() => handleClick("Thriller")}>
              <div className="box thriller">
                <h4>Thriller</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col" onClick={() => handleClick("Fantasy")}>
              <div className="box fantasy">
                <h4>Fantasy</h4>
              </div>
            </div>
            <div className="col big" onClick={() => handleClick("History")}>
              <div className="box history">
                <h4>History</h4>
              </div>
            </div>
            <div className="col" onClick={() => handleClick("Self-Help")}>
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
