import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Here you can implement order placement logic (e.g., send data to an API)
    console.log("Order placed:", cartItems);
    navigate("/order-confirmation"); // Redirect to an order confirmation page
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h3>Checkout</h3>
      <table className="table">
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
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <h5>Total Amount</h5>
        <h5>${totalAmount}</h5>
      </div>
      <button className="btn btn-success" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
