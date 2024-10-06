import BooksRecent from "../components/BooksRecent/BooksRecent";
import { BooksQueryResult, getBooksByReviewDate } from "../apis/HttpDataApis";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";

export const loader = (async ({params, request}) => {

  let page = 0;
  const searchParams = new URL(request.url).searchParams.get("page");
  if (searchParams) {
    page = parseInt(searchParams) - 1;
    if (isNaN(page) || (page < 0)) {
      return redirect("/")
    }
  }

  return await getBooksByReviewDate(page, 5);
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