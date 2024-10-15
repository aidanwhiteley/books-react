import BookCreateEdit from './BookCreateEdit';
import { getGenres, Genre, Book, createBookReview, stringAsRating } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction, useActionData, ActionFunction} from "react-router-typesafe";

export interface BookCreateProps {
  genres: Genre[];
  ratings: string[];
  errorMessages: string[];
  book: Book | null;
}

export const loader = (async () => {
  return await getGenres();
}) satisfies LoaderFunction;

export const action = (async ({request}) => {

  const formData = await request.formData();
  const bookFormData = Object.fromEntries(formData);

  let newBook: Book | null = null;
  const errorMessages = validateBookData(bookFormData);
  if (errorMessages.length === 0) {

    let genreWithoutCount = bookFormData.genre as string;
    const lastIndex = genreWithoutCount.lastIndexOf('(');
    genreWithoutCount = genreWithoutCount.substring(0, lastIndex - 1).trim();

    const newBookReview : Book = {
      title: bookFormData.title as string,
      author: bookFormData.author as string,
      rating: stringAsRating(bookFormData.rating as string),
      genre: genreWithoutCount,
      summary: bookFormData.summary as string
    }

    newBook = await createBookReview(newBookReview);
  }

  const booksCreateProps : BookCreateProps = {
    genres: [],
    ratings: [],
    errorMessages: errorMessages,
    book: newBook
  }

  return booksCreateProps;

}) satisfies ActionFunction

function validateBookData(bookFormData): string[] {

  const errorMessages: string[] =[];
  if (bookFormData.title.length < 1 || bookFormData.title.length > 100) {
    errorMessages.push('The title of your book must be between 1 and 100 characters long');
  }
  if (bookFormData.author.length < 1 || bookFormData.author.length > 75) {
    errorMessages.push('The author name must be between 1 and 75 characters long');
  }
  if (bookFormData.genre.length < 1 || bookFormData.genre.length > 35) {
    errorMessages.push('The book\'s genre must be between 1 and 35 characters long');
  }
  if (bookFormData.summary.length < 1 || bookFormData.summary.length > 20000) {
    errorMessages.push('The summary name must be between 1 and 20,000 characters long');
  }
  return errorMessages;
}



export default function BookCreateEditRoute() {

  const genres = useLoaderData<typeof loader>();
  const ratings = ['Great', 'Good', 'OK', 'Poor', 'Terrible'];

  const props = useActionData<typeof action>();

  let errorMessages: string[] = []
  if (props && props.errorMessages) {
    errorMessages = props.errorMessages;
  }

  const booksCreateProps : BookCreateProps = {
    genres: genres,
    ratings: ratings,
    errorMessages: errorMessages,
    book: null
  }
  
  return (
    <BookCreateEdit {...booksCreateProps} />
  )

}