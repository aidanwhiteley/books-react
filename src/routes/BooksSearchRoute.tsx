import BooksSearch from "../components/BooksSearch/BooksSearch";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";
import { BooksQueryResult, getBooksBySearch } from "../apis/HttpDataApis";


// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async ({request}) => {
  console.log('In loader in books search result: ' + JSON.stringify(request));
  const url = new URL(request.url);
  const search = url.searchParams.get("term") ? url.searchParams.get("term") : '';
  if (!search || search.length === 0) {
      redirect("/");
  }
  return await getBooksBySearch(search!, 0, 5);
}) satisfies LoaderFunction;

export interface BooksProps {
  booksQueryResult: BooksQueryResult;
  pagingRoute: string
}

export default function BooksSearchRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps : BooksProps = {
    booksQueryResult: booksData,
    pagingRoute: '/books/search'
  }

  return (
    <BooksSearch {...booksProps} />
  )

}