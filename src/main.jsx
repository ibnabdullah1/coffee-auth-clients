import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddedCoffee from "./Components/AddedCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import Header from "./Components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      fetch(
        "https://coffee-auth-server-fxyvf8jg3-arafat-ibn-abdullahs-projects.vercel.app/coffee"
      ),
  },
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/addCoffee",
    element: <AddedCoffee />,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://coffee-auth-server-fxyvf8jg3-arafat-ibn-abdullahs-projects.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/users",
    element: <Users />,
    loader: () =>
      fetch(
        "https://coffee-auth-server-fxyvf8jg3-arafat-ibn-abdullahs-projects.vercel.app/user"
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
