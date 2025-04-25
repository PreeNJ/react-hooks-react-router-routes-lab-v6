import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";   // ⬅️ named import, NOT default

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
