import { useNavigate } from "react-router-dom";
import "./books.scss";

function BooksPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="books">
        <div className="booksContainer">
          <div className="top">
            <div className="breadCrumb">
              <i
                className="fa-solid fa-house"
                onClick={() => navigate("/")}
              ></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>BOOKS</p>
            </div>
          </div>

          <div className="leftSection">
            <div className="genres">
              <h3>Genre</h3>
              <div className="genresList">
                <ul>
                  <li>Action & Adventure</li>
                  <li>Activity Books</li>
                  <li>Animals</li>
                  <li>Anthologies</li>
                  <li>Arts & Literature</li>
                  <li>Cars & Trucks</li>
                  <li>Classics</li>
                  <li>Cultural</li>
                </ul>
              </div>
            </div>

            <div className="authors">
              <h3>Authors</h3>
              <div className="authorsList">
                <ul>
                  <li>Arthur Gonzalez</li>
                  <li>Dana Chambers</li>
                  <li>Ernesto Wade</li>
                  <li>Karla Newman</li>
                  <li>Misty Figueroa</li>
                  <li>Rita James</li>
                  <li>Suzanne Casey</li>
                </ul>
              </div>
            </div>

            {/* <div className="priceFilter">
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => handlePriceFilter("min", e.target.value)}
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => handlePriceFilter("max", e.target.value)}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksPage;
