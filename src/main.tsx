import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage, { loader as homepageLoader } from "./routes/homepage";
import ListingPage, {
  ListingPageError,
  loader as listingPageLoader,
} from "./routes/list-page";
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
        loader: homepageLoader,
      },
      {
        path: "/list/:type",
        loader: listingPageLoader,
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
