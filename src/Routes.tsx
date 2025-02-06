import App from "./App";
import AdminLogin from "./pages/AdminLogin";
import CartsPage from "./pages/CartsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

const routes = [
  {
    route: "/",
    element: <App />,
    erroElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "cart", element: <CartsPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "details", element: <ProductDetails /> },
      { path: "product", element: <ProductsPage /> },
    ],
  },
];

export default routes;
