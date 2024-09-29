import BooksSwiper from "../components/BooksSwiper/BooksSwiper";
import { Book, getBooksByRating } from "../apis/HttpDataApis";
import { useLoaderData, LoaderFunction  } from "react-router-dom";

interface LoaderData {
  books: Book[];
 }

const loader: LoaderFunction = async ({}): Promise<LoaderData> => {
  return getBooksByRating("ALL", 20);
}



export default function SwiperRoute() {

  const booksData = useLoaderData() as LoaderData;

  return (
    <BooksSwiper booksData={booksData} />
  )

}