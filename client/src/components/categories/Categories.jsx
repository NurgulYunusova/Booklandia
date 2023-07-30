import "./categories.scss";

function Categories() {
  return (
    <>
      <div className="categories">
        <div className="categoriesContainer">
          <div className="row">
            <div className="col">
              <div className="box education">
                <h4>Higher Education</h4>
              </div>
            </div>
            <div className="col big">
              <div className="box explore">
                <h3>Explore Our Top Categories</h3>
                <button>VIEW ALL</button>
              </div>
            </div>
            <div className="col">
              <div className="box management">
                <h4>Management Books</h4>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="box finance">
                <h4>Finance Books</h4>
              </div>
            </div>
            <div className="col big">
              <div className="box engineering">
                <h4>Engineering Books</h4>
              </div>
            </div>
            <div className="col">
              <div className="box commerce">
                <h4>Commerce Books</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
