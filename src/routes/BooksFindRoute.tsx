import BooksFind from "../components/BooksFind/BooksFind";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";
import { getAuthors, getGenres, getReaders, Author, Genre, Reader } from "../apis/HttpDataApis";



export const loader = (async ({}) => {

  const authors = await getAuthors();
  const genres = await getGenres();
  const readers = await getReaders();

  return {authors, genres, readers};

}) satisfies LoaderFunction;

export interface BooksFindProps {
  authors: Author[];
  genres: Genre[];
  readers: Reader[];
}

export default function BooksFindRoute() {

  const data = useLoaderData<typeof loader>();

  const booksFindProps : BooksFindProps = {
    authors: data.authors,
    genres: data.genres,
    readers: data.readers
  }

  return (
    <BooksFind {...booksFindProps} />
  )

}