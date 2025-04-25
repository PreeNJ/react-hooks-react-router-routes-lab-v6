import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage      from "./pages/Home";
import MoviePage     from "./pages/Movie";
import DirectorsPage from "./pages/Directors";
import ActorsPage    from "./pages/Actors";
import ErrorPage     from "./pages/ErrorPage.jsx";

const routes = [
  { path: "/",           element: <HomePage />,      errorElement: <ErrorPage /> },
  { path: "/movie/:id",  element: <MoviePage />,     errorElement: <ErrorPage /> },
  { path: "/directors",  element: <DirectorsPage />, errorElement: <ErrorPage /> },
  { path: "/actors",     element: <ActorsPage />,    errorElement: <ErrorPage /> },
  { path: "*",           element: <ErrorPage /> },
];

export const router = createBrowserRouter(routes);  // for the real app
export default routes;                              // what the tests import
