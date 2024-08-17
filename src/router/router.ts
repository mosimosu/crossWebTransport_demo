import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Test from "../pages/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
  },
  {
    path: "/test",
    element: React.createElement(Test),
  },
]);
