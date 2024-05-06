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
import MyCart from "./Pages/MyCart/Cart.tsx";
import About from "./Pages/aboutUs/aboutPage.tsx";
import GetStarted from "./Pages/landingPage/getStarted.tsx";
import User from "./Pages/Profile/userProfile.tsx";
<<<<<<< HEAD
import Artist from "./Pages/Profile/artistProfile.tsx";
=======
import { AuthProvider } from "./auth/AuthContext.tsx";
>>>>>>> 797d2d6b342d5ab5e642a72d959541e8c143195c

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
<<<<<<< HEAD
  { path: "/landingPage", element: <GetStarted />},
  { path: "/user", element: <User />},
  { path: "/Profile", element: <Artist />},
=======
  { path: "/landingPage", element: <GetStarted /> },
  { path: "/user", element: <User /> },
  { path: "/Cart", element: <MyCart />}
>>>>>>> 797d2d6b342d5ab5e642a72d959541e8c143195c
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
