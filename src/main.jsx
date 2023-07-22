import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Category from "./views/Category.jsx";
import World from "./views/World.jsx";
import Headlines from "./views/Headlines.jsx";
import UserProfilePage from "./views/UserProfilePage.jsx";
import AccountPage from "./views/AccountPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // homepg landing
    element: <App />,
  },
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/headlines",
    element: <Headlines />,
  },

  {
    path: "/world",
    element: <World />,
  },
  {
    path: "/:category",
    element: <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
