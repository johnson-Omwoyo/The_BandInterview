import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <hr className="p-0 m-0" />

      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default App;
