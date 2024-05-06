import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import LogInPage from "./Pages/Login/LogIn.tsx";
import Home from "./Pages/home/HomePage.tsx";
import SignUpPage from "./Pages/Signup/SignUp.tsx";
import FirebaseTest from "./Pages/test pages/FirebaseTest.tsx";
import Product from "./Pages/Product/ProductPage.tsx";
import Shop from "./Pages/shop/shopPage.tsx";
import Explore from "./Pages/explore/explorePage.tsx";
import About from "./Pages/aboutUs/aboutPage.tsx";
import GetStarted from "./Pages/landingPage/getStarted.tsx";
import User from "./Pages/Profile/userProfile.tsx";
import Artist from "./Pages/Profile/artistProfile.tsx";
import MyCart from "./Pages/MyCart/Cart.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Signup", element: <SignUpPage /> },
  { path: "/LogIn", element: <LogInPage /> },
  { path: "/home", element: <Home /> },
  { path: "/Product", element: <Product /> },
  { path: "/shop", element: <Shop /> },
  { path: "/explore", element: <Explore /> },
  { path: "/about", element: <About /> },
  { path: "/firebaseTest", element: <FirebaseTest /> },
  { path: "/landingPage", element: <GetStarted />},
  { path: "/user", element: <User />},
  { path: "/Profile", element: <Artist />},
  { path: "/Cart", element: <MyCart />}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
