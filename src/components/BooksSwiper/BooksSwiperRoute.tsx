import BooksSwiper from "./BooksSwiper";
import { BooksQueryResult, getBooksByRating } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction } from "react-router-typesafe";

export const loader = (async () => {
  return await getBooksByRating("GREAT", 0, 30);
}) satisfies LoaderFunction;

export interface BooksProps {
  booksQueryResult: BooksQueryResult;
}

export default function SwiperRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps: BooksProps = {
    booksQueryResult: booksData
  }

  return (
    <BooksSwiper {...booksProps} />
  )

}