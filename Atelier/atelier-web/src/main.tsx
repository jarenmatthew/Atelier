import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import LogInPage from "./Pages/Login/LogIn";
import Home from "./Pages/home/HomePage";
import SignUpPage from "./Pages/Signup/SignUp";
import FirebaseTest from "./Pages/test pages/FirebaseTest";
import Product from "./Pages/Product/ProductPage";
import Shop from "./Pages/shop/shopPage";
import MyCart from "./Pages/MyCart/Cart";
import About from "./Pages/aboutUs/aboutPage";
import GetStarted from "./Pages/landingPage/getStarted";
import User from "./Pages/Profile/userProfile";
import Artist from "./Pages/Profile/artistProfile";
import Explore from "./Pages/explore/explorePage";
import Notification from "./Pages/Notification";
import UserProfile from "./Pages/Profile/userProfile"; // Import UserProfile

const router = createBrowserRouter([
  { path: "/", element: <GetStarted /> },
  { path: "/SignUp", element: <SignUpPage /> },
  { path: "/LogIn", element: <LogInPage /> },
  { path: "/home", element: <Home /> },
  { path: "/Product", element: <Product /> },
  { path: "/shop", element: <Shop /> },
  { path: "/explore", element: <Explore /> },
  { path: "/about", element: <About /> },
  { path: "/firebaseTest", element: <FirebaseTest /> },
  { path: "/landingPage", element: <GetStarted /> },
  { path: "/user", element: <User /> },
  { path: "/profile/:userId", element: <UserProfile /> }, // Corrected syntax
  { path: "/Cart", element: <MyCart /> },
  { path: "/Notification", element: <Notification /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
