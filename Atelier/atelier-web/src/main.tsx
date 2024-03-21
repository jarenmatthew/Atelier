import React from "react";
import ReactDOM from "react-dom/client";
import SignUpForm from "./Pages/Signup/SignupForm.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./Pages/Signup/LogIn.tsx";
import Home from "./Pages/home/HomePage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  { path: "/signup", element: <SignUpForm />},
  { path: "/login", element: <LogInPage /> },
  { path: "/home", element: <Home/>}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
