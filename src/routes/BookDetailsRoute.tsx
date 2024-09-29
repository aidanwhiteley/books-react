
import { Book, getBookById } from "../apis/HttpDataApis";
import { useLoaderData, LoaderFunction} from "react-router-typesafe";
import BookDetails from "../components/BookDetails/BookDetails";

export const loader = (async (request) => {
  return await getBookById(request.params.id!);
}) satisfies LoaderFunction;


export interface BookProps {
  book: Book;
}

export default function BookDetailsRoute() {

  const book = useLoaderData<typeof loader>();

  const bookProps : BookProps = {
    book: book
  }

  return (
    <BookDetails {...bookProps}/>
  )

}