import BooksSearch from "../components/BooksSearch/BooksSearch";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";
import { BooksQueryResult, getBooksBySearch } from "../apis/HttpDataApis";


// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async ({request}) => {
  console.log('In loader in books search result: ' + request.url);
  const url = new URL(request.url);
  const search = url.searchParams.get("term") ? url.searchParams.get("term") : '';
  if (!search || search.length === 0) {
      redirect("/");
  }

  const page = url.searchParams.get("page") ? url.searchParams.get("page") : 0 + '';
  let pageNumber = '0';
  if (page && page.length !== 0 && page !== '0') {
    if (! isNaN(parseInt(page))) {
      pageNumber = (parseInt(page) - 1) + '';
    }
  } 
  
  return await getBooksBySearch(search!, parseInt(pageNumber), 5);
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