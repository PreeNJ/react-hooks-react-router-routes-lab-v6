import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home      from "./pages/Home";
import Directors from "./pages/Directors";
import Actors    from "./pages/Actors";
import Movie     from "./pages/Movie";

const router = createBrowserRouter([
  { path: "/",          element: <Home /> },
  { path: "/directors", element: <Directors /> },
  { path: "/actors",    element: <Actors /> },
  { path: "/movie/:id", element: <Movie /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
