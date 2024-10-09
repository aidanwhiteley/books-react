import BooksFind from "./BooksFind";
import { useLoaderData, LoaderFunction } from "react-router-typesafe";
import { getAuthors, getGenres, getReaders, Author, Genre, Reader } from "../../apis/HttpDataApis";
import { useContext } from 'react';
import { ProfileContext } from '../../utils/ProfileContext';


export const loader = (async () => {

  const [authors, genres, readers] = await Promise.all([getAuthors(), getGenres(), getReaders()]);

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