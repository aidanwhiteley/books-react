
import { Book, getBookById, createComment, deleteComment } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction, ActionFunction} from "react-router-typesafe";
import BookDetails from "../BookDetails/BookDetails";

export const loader = (async (request) => {
  return await getBookById(request.params.id!);
}) satisfies LoaderFunction;

export const action = (async ({request}) => {

  const formData = await request.formData();
  const bookFormData = Object.fromEntries(formData);

  const intent = formData.get("intent");
  const bookId = bookFormData.bookId as string;

  if (intent === 'add') {
    const comment = bookFormData.comment as string;
    return await createComment(bookId, comment);
  } else {
    const commentId = bookFormData.commentId as string;
    return await deleteComment(bookId, commentId);
  }

}) satisfies ActionFunction

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