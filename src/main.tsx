import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SwiperRoute from "./routes/SwiperRoute";
import { loader as recentBooksLoader } from "./routes/SwiperRoute"
import { loader as bookByIdLoader } from "./routes/BookDetailsRoute"
import BookDetailsRoute from "./routes/BookDetailsRoute"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <SwiperRoute />, 
            loader: recentBooksLoader
          },
          {
            path: "book/:id",
            element: <BookDetailsRoute />,
            loader: bookByIdLoader
          }
        ]
      }
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
