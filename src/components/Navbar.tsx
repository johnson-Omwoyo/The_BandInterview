import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import { useCart } from "./CartContext";
import { useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  useEffect(() => {}, [cartItems]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg py-2 ">
            <div className="container-fluid">
              <div
                className="navbar-brand text-center"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <p className="category-name text-dark">CLICKCART</p>
                <p
                  style={{ marginTop: "-24px", fontSize: "12px" }}
                  className="text-secondary "
                >
                  click we deliver
                </p>
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
