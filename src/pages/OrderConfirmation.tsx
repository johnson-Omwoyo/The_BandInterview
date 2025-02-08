import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h3>Order Confirmation</h3>
      <div className="alert alert-success">
        <i className="fa-solid fa-circle-check"></i> Your order has been placed successfully!
      </div>

      <h5>Order Details</h5>
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

      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default OrderConfirmationPage;
