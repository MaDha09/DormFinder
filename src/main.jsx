import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Reg from "./pages/components/registration/Reg";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Property from "./pages/Property";
import File from "./pages/File";
import ProfileUpdate from "./pages/components/update/UpdateProfile";

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
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/property",
    element: <Property />,
  },
  {
    path: "/create",
    element: <File />,
  },
  {
    path: "/update",
    element: <ProfileUpdate />,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
