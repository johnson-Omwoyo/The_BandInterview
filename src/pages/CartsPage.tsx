import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

function CartsPage() {
  const { cartItems, setCartItems } = useCart();
  const [quantity, setQuantity] = useState<number>(() => {
    return 1;
  });

  const navigate = useNavigate();

  const handleQuantity = (operation: string, itemId: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (operation === "+") {
          item.quantity += 1;
        } else if (operation === "-" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCartItems);

    const updatedItem = cartItems.find((item) => item.id === itemId);
    if (updatedItem) {
      setQuantity(updatedItem.quantity);
    }
  };

  // Handle checkout action
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Your Cart Items({cartItems.length})</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table p-5 table-responsive">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image} // You can replace with actual product image URL
                        alt={item.name}
                        className="img-fluid me-2"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <div>{item.name}</div>
                        <small>"No description available"</small>
                      </div>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleQuantity("-", item.id)}
                      >
                        -
                      </button>
                      <div className="quantity-field p-2">{quantity}</div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleQuantity("+", item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-3 ms-auto text-center">
          <div className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <hr />
          <button className="btn btn-dark" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartsPage;
