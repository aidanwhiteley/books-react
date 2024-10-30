import BookCreateEdit from './BookCreateEdit';
import { getGenres, Book, createOrUpdateBookReview, stringAsRating, getBookById, Genre, getGoogleBooks, GoogleBookSearchResult } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction, useActionData, ActionFunction, redirect } from "react-router-typesafe";

export interface BookCreateProps {
  genres: Genre[];
  ratings: string[];
  errorMessages: string[];
  bookId?: string;
  book: Book | null;
  googleBooks: GoogleBookSearchResult;
}

export const loader = (async (request) => {

  let currentBook = {} as Book;
  let googleBooks = {} as GoogleBookSearchResult;
  if (request.params.id) {
    currentBook = await getBookById(request.params.id!);
    googleBooks = await getGoogleBooks(currentBook.title, currentBook.author);
  }

  const genres = await getGenres()

  return { 'currentBook': currentBook, 'genres': genres, 'googleBooks': googleBooks };

}) satisfies LoaderFunction;

export const action = (async ({ request }) => {

  const formData = await request.formData();
  const bookFormData = Object.fromEntries(formData);

  const errorMessages = validateBookData(bookFormData);
  if (errorMessages.length === 0) {

    let genreWithoutCount = bookFormData.genre as string;
    const lastIndex = genreWithoutCount.lastIndexOf('(');
    genreWithoutCount = genreWithoutCount.substring(0, lastIndex - 1).trim();

    const bookReview: Book = {
      id: bookFormData.bookId as string,
      comments: [],
      title: bookFormData.title as string,
      author: bookFormData.author as string,
      rating: stringAsRating(bookFormData.rating as string),
      genre: genreWithoutCount,
      summary: bookFormData.summary as string,
      googleBookId: bookFormData.googleBookId as string
    }

    if (!bookReview.id) {
      delete bookReview.id;
    }

    await createOrUpdateBookReview(bookReview);

    return redirect("/books/recent")
  }

  const booksCreateProps: BookCreateProps = {
    genres: [],
    ratings: [],
    errorMessages: errorMessages,
    bookId: '',
    book: null,
    googleBooks: {} as GoogleBookSearchResult
  }

  return booksCreateProps;

}) satisfies ActionFunction

// See https://dev.to/svehla/typescript-object-fromentries-389c or 
// https://stackoverflow.com/questions/69019873/how-can-i-get-typed-object-entries-and-object-fromentries-in-typescript
// which are all too advanced for my beginner's Typescript!
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateBookData(bookFormData: any): string[] {

  const errorMessages: string[] = [];
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

  const genres = useLoaderData<typeof loader>().genres;
  const currentBook = useLoaderData<typeof loader>().currentBook;
  const googleBooks = useLoaderData<typeof loader>().googleBooks;

  const ratings = ['Great', 'Good', 'OK', 'Poor', 'Terrible'];

  const props = useActionData<typeof action>();

  let errorMessages: string[] = []
  if (props && props.errorMessages) {
    errorMessages = props.errorMessages;
  }

  const booksCreateProps: BookCreateProps = {
    genres: genres,
    ratings: ratings,
    errorMessages: errorMessages,
    bookId: currentBook?.id,
    book: currentBook,
    googleBooks: googleBooks
  }

  return (
    <BookCreateEdit {...booksCreateProps} />
  )

}