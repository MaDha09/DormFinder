import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import Reg from "./pages/components/registration/Reg";
import DashBoard from "./pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Reg",
    element: <Reg />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
