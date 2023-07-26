/* eslint-disable react/prop-types */
import "./wishlistTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const WishlistTable = ({
  wishlistItems,
  handleAddToCart,
  handleDeleteItem,
}) => {
  return (
    <table className="wishlistTable">
      <thead>
        <tr>
          <th>Book Image</th>
          <th>Book Name</th>
          <th>Price</th>
          <th>Added Date</th>
          <th>Add to Cart</th>
          <th>Delete Book</th>
        </tr>
      </thead>
      <tbody>
        {wishlistItems.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} />
            </td>
            <td className="bookName bookInfo">{item.name}</td>
            <td className="price bookInfo">{item.price}</td>
            <td className="addedDate bookInfo">{item.addedDate}</td>
            <td>
              <button
                onClick={() => handleAddToCart(item.id)}
                className="addToCart"
              >
                Add to Cart
              </button>
            </td>
            <td className="deleteColumn">
              <button
                onClick={() => handleDeleteItem(item.id)}
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
