import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/RootRoute";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SwiperRoute from "./routes/SwiperRoute";
import BooksRecentRoute from './routes/BooksRecentRoute';
import BooksSearchRoute from './routes/BooksSearchRoute';
import { loader as bookByRatingLoader } from "./routes/SwiperRoute"
import { loader as bookByIdLoader } from "./routes/BookDetailsRoute"
import { loader as booksRecentLoader } from './routes/BooksRecentRoute';
import { loader as booksSearchLoader } from './routes/BooksSearchRoute';
import BookDetailsRoute from "./routes/BookDetailsRoute";

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
            loader: bookByRatingLoader
          },
          {
            path: "book/:id",
            element: <BookDetailsRoute />,
            loader: bookByIdLoader
          },
          {
            path: "books/recent",
            element: <BooksRecentRoute />,
            loader: booksRecentLoader
          },
          {
            path: "books/search",
            element: <BooksSearchRoute />,
            loader: booksSearchLoader
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
