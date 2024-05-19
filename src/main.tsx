import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/homepage";
import ListingPage from "./routes/list-page";
import RootLayout from "./routes/layouts/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/list/:type",
        element: <ListingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
