/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import "./wishlistTable.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { BasketContext } from "../../context/BasketContext";

const WishlistTable = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToBasket } = useContext(BasketContext);
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
      removeFromWishlist(selectedItemId);
      setSelectedItemId(null);
    }
    setOpenDialog(false);
  };

  const handleAddToBasket = (id) => {
    addToBasket(id);
    removeFromWishlist(id);
  };

  return (
    <>
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
                    onClick={() => handleAddToBasket(q.book._id)}
                    className="addToCart"
                  >
                    Add to Cart
                  </button>
                </td>
                <td className="deleteColumn">
                  <button
                    onClick={() => handleDeleteClick(q.book._id)}
                    className="delete"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Remove</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this book from the wishlist?
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
    </>
  );
};

export default WishlistTable;
