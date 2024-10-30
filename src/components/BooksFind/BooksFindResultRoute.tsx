
import { LoaderFunction, useLoaderData, redirect } from "react-router-typesafe";
import { BooksQueryResult, getBooksByAuthor, getBooksByGenre, getBooksByRating, getBooksByReader, stringAsRating } from "../../apis/HttpDataApis";
import BooksFindResult from "./BooksFindResult";


// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async (params) => {

  const criteria = params.params.criteria;
  const value = params.params.value;

  let page = 0;
  const searchParams = new URL(params.request.url).searchParams.get("page");
  if (searchParams) {
    page = parseInt(searchParams);
    if (isNaN(page) || (page <= 0)) {
      return redirect("/")
    }
    // UI is "one based" but API is "zero based"
    page = page - 1;
  }

  if (criteria === 'author') {
    return await getBooksByAuthor(value!, page, 7);
  } else if (criteria === 'genre') {
    return await getBooksByGenre(value!, page, 7);
  } else if (criteria === 'rating') {
    return await getBooksByRating(stringAsRating(value!), page, 7);
  } else if (criteria === 'reader') {
    return await getBooksByReader(value!, page, 7);
  }
}) satisfies LoaderFunction;

export interface BooksProps {
  booksQueryResult: BooksQueryResult;
}

export default function BooksFindRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps: BooksProps = {
    booksQueryResult: booksData!
  }
  return (
    <BooksFindResult {...booksProps} />
  )

}