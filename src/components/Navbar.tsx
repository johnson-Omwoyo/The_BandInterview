import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  interface CartItem {
    id: number;
    quantity: number;
  }
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    {
      id: 3,
      quantity: 3,
    },
  ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg py-4">
            <div className="container-fluid">
              <div className="navbar-brand" onClick={() => navigate("/")}>
                <span className="click">Click</span>
                <span className="cart">Cart</span>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-3">
                  <li className="nav-item">
                    <span className="nav-link" onClick={() => navigate("/")}>
                      Home
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      onClick={() => navigate("/products")}
                    >
                      Shop
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      onClick={() => navigate("/login")}
                    >
                      Admin
                    </span>
                  </li>

                  <li className="nav-item">
                    <button
                      className="btn position-relative"
                      onClick={() => navigate("/cart")}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      {cartItems.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cartItems.length}
                          <span className="visually-hidden">items in cart</span>
                        </span>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
