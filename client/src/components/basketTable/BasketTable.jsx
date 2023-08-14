/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./basketTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { BasketContext } from "../../context/BasketContext";

const BasketTable = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);
  const [bookQuantities, setBookQuantities] = useState({});

  const handleDecrease = (bookId) => {
    if (bookQuantities[bookId] > 1) {
      setBookQuantities((prevQuantities) => ({
        ...prevQuantities,
        [bookId]: prevQuantities[bookId] - 1,
      }));
    }
  };

  const handleIncrease = (bookId) => {
    setBookQuantities((prevQuantities) => ({
      ...prevQuantities,
      [bookId]: (prevQuantities[bookId] || 1) + 1,
    }));
  };

  const totalSubtotal = basket.reduce((total, q) => {
    const quantity = bookQuantities[q.book._id] || 0;
    return total + q.book.price * quantity;
  }, 0);

  return (
    <>
      <div className="basket">
        <table className="basketTable">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Book</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {basket &&
              basket.map((q) => (
                <tr key={q._id}>
                  <td className="deleteColumn">
                    <button
                      onClick={() => removeFromBasket(q.book._id)}
                      className="delete"
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                  <td>
                    <img src={q.book?.image} alt={q.book?.name} />
                  </td>
                  <td className="bookName bookInfo">{q.book?.name}</td>
                  <td className="price bookInfo">${q.book?.price}</td>
                  <td className="quantity">
                    <div className="quantityComponent">
                      <button onClick={() => handleDecrease(q.book._id)}>
                        -
                      </button>
                      <span>{bookQuantities[q.book._id] || 1}</span>
                      <button onClick={() => handleIncrease(q.book._id)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td className="subTotal">
                    $
                    {Number(
                      (
                        q.book.price * (bookQuantities[q.book._id] || 0)
                      ).toFixed(2)
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="cartTotals">
          <h2>Cart totals</h2>
          <div className="subtotal">
            <h4>Subtotal</h4>
            <p>${totalSubtotal.toFixed(2)}</p>
          </div>
          <div className="delivery">
            <h4>Delivery</h4>
            <p>free</p>
          </div>
          <div className="total">
            <h4>Total</h4>
            <p>${totalSubtotal.toFixed(2)}</p>
          </div>

          <div className="checkoutButton">
            <button className="checkout">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketTable;
