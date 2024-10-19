import BooksSearch from "../BooksSearch/BooksSearch";
import { useLoaderData, LoaderFunction, redirect} from "react-router-typesafe";
import { BooksQueryResult, getBooksBySearch } from "../../apis/HttpDataApis";


export const loader = (async ({request}) => {
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
}

export default function BooksSearchRoute() {

  const booksData = useLoaderData<typeof loader>();

  const booksProps : BooksProps = {
    booksQueryResult: booksData
  }

  return (
    <BooksSearch {...booksProps} />
  )

}