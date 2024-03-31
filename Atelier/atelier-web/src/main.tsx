import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogInPage from "./Pages/Signup/LogIn.tsx";
import LoginTest from "./Pages/Signup/LoginTest.tsx";
import SignUpPage from "./Pages/Signup/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "/home", element: <App /> },
  { path: "/login", element: <LogInPage /> },
  { path: "/test", element: <LoginTest /> },
  { path: "/signup", element: <SignUpPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
