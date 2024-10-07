import BooksFind from "../components/BooksFind/BooksFind";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";
import { BooksQueryResult, getAuthors, getGenres, getReaders } from "../apis/HttpDataApis";



export const loader = (async ({}) => {

  const authors = getAuthors();
  const genres = getGenres();
  const readers = getReaders();

  return await {authors, genres, readers};

}) satisfies LoaderFunction;

export interface BooksFindProps {
  booksQueryResult: BooksQueryResult;
}

export default function BooksFindRoute() {

  const data = useLoaderData<typeof loader>();

  // const booksProps : BooksProps = {
  //   booksQueryResult: {},
  // }

  return (
    <BooksFind />
  )

}