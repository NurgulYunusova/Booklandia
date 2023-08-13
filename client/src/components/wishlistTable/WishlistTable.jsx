/* eslint-disable react/prop-types */
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./wishlistTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

const WishlistTable = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <table className="wishlistTable">
      <thead>
        <tr>
          <th>Book</th>
          <th>Title</th>
          <th>Price</th>
          <th>Added Date</th>
          <th>Add to Cart</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {wishlist &&
          wishlist.map((q) => (
            <tr key={q._id}>
              <td>
                <img src={q.book?.image} alt={q.book?.name} />
              </td>
              <td className="bookName bookInfo">{q.book?.name}</td>
              <td className="price bookInfo">58$</td>
              <td className="addedDate bookInfo">
                {moment(q.createdAt).format("MMMM D, YYYY HH:mm")}
              </td>
              <td>
                <button
                  // onClick={() => handleAddToCart(item.id)}
                  className="addToCart"
                >
                  Add to Cart
                </button>
              </td>
              <td className="deleteColumn">
                <button
                  onClick={() => removeFromWishlist(q.book._id)}
                  className="delete"
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default WishlistTable;
