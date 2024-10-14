import BookCreateEdit from './BookCreateEdit';
import { getGenres, Genre } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction} from "react-router-typesafe";

export const loader = (async () => {

  return await getGenres();

}) satisfies LoaderFunction;

export interface BookCreateProps {
  genres: Genre[];
  ratings: string[]
}

export default function BookCreateEditRoute() {

  const genres = useLoaderData<typeof loader>();
  const ratings = ['Great', 'Good', 'OK', 'Poor', 'Terrible'];

  const booksCreateProps : BookCreateProps = {
    genres: genres,
    ratings: ratings
  }
  
  return (
    <BookCreateEdit {...booksCreateProps} />
  )

}