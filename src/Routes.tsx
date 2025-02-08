import App from "./App";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import CartsPage from "./pages/CartsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import OrderConfirmationPage from "./pages/OrderConfirmation";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

const routes = [
  {
    route: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "cart", element: <CartsPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "details", element: <ProductDetails /> },
      { path: "products", element: <ProductsPage /> },
      { path: "/dashboard", element: <AdminDashboard /> },
      { path: "/order-confirmation", element: <OrderConfirmationPage /> },
    ],
  },
];

export default routes;
