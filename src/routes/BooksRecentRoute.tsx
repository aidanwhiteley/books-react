import BooksRecent from "../components/BooksRecent/BooksRecent";
import { BooksQueryResult, getBooksByReviewDate } from "../apis/HttpDataApis";
import { useLoaderData, LoaderFunction} from "react-router-typesafe";

export const loader = (async () => {
  return await getBooksByReviewDate(0, 5);
}) satisfies LoaderFunction;

export interface BooksProps {
  booksQueryResult: BooksQueryResult;
}

export default function BooksRecentRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps : BooksProps = {
    booksQueryResult: booksData
  }

  return (
    <BooksRecent {...booksProps} />
  )

}