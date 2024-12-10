import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LogIn from "./pages/logIn";
import Home from "./pages/home";
import Reg from "./pages/components/registration/Reg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/Reg",
    element: <Reg />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
