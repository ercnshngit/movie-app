import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./routes/homepage";
import ListingPage, { ListingPageError, loader } from "./routes/list-page";
import RootLayout from "./routes/layouts/root";
import RootError from "./routes/error-pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootError />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/list/:type",
        loader: loader,
        element: <ListingPage />,
        errorElement: <ListingPageError />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
