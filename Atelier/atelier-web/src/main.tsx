import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./Pages/Signup/LogIn.tsx";
import Home from "./Pages/home/HomePage.tsx";
import SignUpForm from "./Pages/Signup/SignupForm.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/Signup", element: <SignUpForm/>},
  { path: "/LogIn", element: <LogInPage/> },
  { path: "/home", element: <Home/>}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
