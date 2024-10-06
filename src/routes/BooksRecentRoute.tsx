import BooksRecent from "../components/BooksRecent/BooksRecent";
import { BooksQueryResult, getBooksByReviewDate } from "../apis/HttpDataApis";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async ({request}) => {

  let page = 0;
  const searchParams = new URL(request.url).searchParams.get("page");
  if (searchParams) {
    page = parseInt(searchParams);
    if (isNaN(page) || (page <= 0)) {
      return redirect("/")
    }
    // UI is "one based" but API is "zero based"
    page = page - 1;
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