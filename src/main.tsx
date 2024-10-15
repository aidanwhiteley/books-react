import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root/RootRoute";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SwiperRoute from "./components/BooksSwiper/BooksSwiperRoute";
import BooksRecentRoute from './components/BooksRecent/BooksRecentRoute';
import BooksSearchRoute from './components/BooksSearch/BooksSearchRoute';
import BooksFindRoute from './components/BooksFind/BooksFindRoute';
import BooksFindResultRoute from './components/BooksFind/BooksFindResultRoute';
import BookDetailsRoute from "./components/BookDetails/BookDetailsRoute";
import BookCreateEditRoute from './components/BookCreateEdit/BookCreateEditRoute';
import LogoffRoute from './components/LogonOut/LogoffRoute';
import LogonRoute from './components/LogonOut/LogonRoute';
import { loader as profileLoader } from './components/Root/RootRoute';
import { loader as bookByRatingLoader } from "./components/BooksSwiper/BooksSwiperRoute"
import { loader as bookByIdLoader } from "./components/BookDetails/BookDetailsRoute"
import { loader as booksRecentLoader } from './components/BooksRecent/BooksRecentRoute';
import { loader as booksSearchLoader } from './components/BooksSearch/BooksSearchRoute';
import { loader as booksFindLoader } from './components/BooksFind/BooksFindRoute';
import { loader as booksFindResultLoader } from './components/BooksFind/BooksFindResultRoute';
import { loader as logoffLoader } from './components/LogonOut/LogoffRoute';
import { loader as bookCreateEditLoader } from './components/BookCreateEdit/BookCreateEditRoute';
import { action as bookCreateEditAction } from './components/BookCreateEdit/BookCreateEditRoute';
import BooksFindInfo from './components/BooksFind/BookFindInfo';
import TandCs from './components/TandCsPrivacy/TandCs';
import Privacy from './components/TandCsPrivacy/Privacy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: profileLoader,
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
            path: "books/create",
            element: <BookCreateEditRoute />,
            loader: bookCreateEditLoader,
            action: bookCreateEditAction
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
              }
            ]
          },
          {
            path: "logon",
            element: <LogonRoute />
          },
          {
            path: "logoff",
            element: <LogoffRoute />,
            loader: logoffLoader
          },
          {
            path: "tandcs",
            element: <TandCs />
          },
          {
            path: "privacy",
            element: <Privacy />
          },
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
