/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./basketTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { BasketContext } from "../../context/BasketContext";

const BasketTable = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
  };

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
                  <td className="price bookInfo">{q.book?.price}</td>
                  <td className="quantity">
                    <div className="quantityComponent">
                      <button onClick={handleDecrease}>-</button>
                      <span>{currentQuantity}</span>
                      <button onClick={handleIncrease}>+</button>
                    </div>
                  </td>
                  <td className="subTotal">{q.book.price}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="cartTotals">
          <h2>Cart totals</h2>
          <div className="subtotal">
            <h4>Subtotal</h4>
            <p>$500</p>
          </div>
          <div className="delivery">
            <h4>Delivery</h4>
            <p>free</p>
          </div>
          <div className="total">
            <h4>Total</h4>
            <p>$500</p>
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
