import BooksSwiper from "./BooksSwiper";
import { BooksQueryResult, getBooksByRating, stringAsRating } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction } from "react-router-typesafe";

export const loader = (async ({ request }) => {
  const url = new URL(request.url);
  let rating = url.searchParams.get("rating") ? url.searchParams.get("rating") : '';
  if (rating === 'ok' || rating === 'good') {
    rating = rating.toUpperCase();
  } else {
    rating = 'great';
  }

  return {rating: rating.toLowerCase(), books: await getBooksByRating(stringAsRating(rating), 0, 30)};
}) satisfies LoaderFunction;

export interface BooksProps {
  rating: string;
  booksQueryResult: BooksQueryResult;
}

export default function SwiperRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps: BooksProps = {
    rating: booksData.rating,
    booksQueryResult: booksData.books
  }

  return (
    <BooksSwiper {...booksProps} />
  )

}