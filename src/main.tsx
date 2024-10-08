import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/RootRoute";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SwiperRoute from "./routes/SwiperRoute";
import BooksRecentRoute from './routes/BooksRecentRoute';
import BooksSearchRoute from './routes/BooksSearchRoute';
import BooksFindRoute from './routes/BooksFindRoute';
import BooksFindResultRoute from './routes/BooksFindResultRoute';
import { loader as bookByRatingLoader } from "./routes/SwiperRoute"
import { loader as bookByIdLoader } from "./routes/BookDetailsRoute"
import { loader as booksRecentLoader } from './routes/BooksRecentRoute';
import { loader as booksSearchLoader } from './routes/BooksSearchRoute';
import { loader as booksFindLoader } from './routes/BooksFindRoute';
import { loader as booksFindResultLoader } from './routes/BooksFindResultRoute';
import BookDetailsRoute from "./routes/BookDetailsRoute";
import BooksFindInfo from './components/BooksFind/BookFindInfo';

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
          },
          {
            path: "books/find",
            element: <BooksFindRoute />,
            loader: booksFindLoader,
            shouldRevalidate: ({ currentUrl, nextUrl}) => {
              return !(nextUrl.pathname.includes('author') || nextUrl.pathname.includes('genre') || nextUrl.pathname.includes('reader'))
            },
            children: [
              { 
                index: true, 
                element: <BooksFindInfo /> 
              },
              {
                path: ":criteria/:value",
                element: <BooksFindResultRoute />,
                loader: booksFindResultLoader
              },
            ]
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
