import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllToys from "./components/AllToys.jsx";
import AddAToy from "./components/AddAToy.jsx";
import MyToys from "./components/MyToys.jsx";
import Blogs from "./components/Blogs.jsx";
import Login from "./user credentials/Login.jsx";
import Register from "./user credentials/Register.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addatoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
