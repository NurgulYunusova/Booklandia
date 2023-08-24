/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./basketTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { BasketContext } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const BasketTable = () => {
  const {
    basket,
    bookQuantities,
    removeFromBasket,
    setBookQuantities,
    updateQuantityOnServer,
  } = useContext(BasketContext);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedItemId(null);
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedItemId) {
      removeFromBasket(selectedItemId);
      setSelectedItemId(null);
    }
    setOpenDialog(false);
  };

  const handleDecrease = (bookId) => {
    if (bookQuantities[bookId] > 1) {
      const newQuantities = {
        ...bookQuantities,
        [bookId]: bookQuantities[bookId] - 1,
      };

      setBookQuantities(newQuantities);
    }
  };

  const handleIncrease = (bookId) => {
    const newQuantities = {
      ...bookQuantities,
      [bookId]: (bookQuantities[bookId] || 1) + 1,
    };

    setBookQuantities(newQuantities);
  };

  const totalSubtotal = basket.reduce((total, q) => {
    const quantity = bookQuantities[q.book._id] || 1;
    return total + q.book.price * quantity;
  }, 0);

  const handleOrderPageClick = async () => {
    try {
      for (const bookId in bookQuantities) {
        await updateQuantityOnServer(bookId, bookQuantities[bookId]);
      }

      navigate("/order", {
        state: totalSubtotal,
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error updating quantities:", error);
    }
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
                      onClick={() => handleDeleteClick(q.book._id)}
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
                        q.book.price * (bookQuantities[q.book._id] || 1)
                      ).toFixed(2)
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Remove</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to remove this book from the cart?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="primary">
              Remove
            </Button>
          </DialogActions>
        </Dialog>

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
            <button className="checkout" onClick={() => handleOrderPageClick()}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketTable;
