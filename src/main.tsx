import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes";

const Routes = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Routes} />
);
