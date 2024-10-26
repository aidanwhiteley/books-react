import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BooksSwiper.css';

import { BooksProps } from "./BooksSwiperRoute";

// For testing only
// import data from "./testdata.json";

export default function BookSwiper(props: BooksProps) {

  const booksData = props.booksQueryResult.content.map(aBook => {
    return {
        id: aBook.id,
        title: aBook.title,
        author: aBook.author,
        rating: aBook.rating,
        bookAppUrl: '/book/' + aBook.id,
        thumbnail: ((aBook.googleBookId && aBook.googleBookDetails) ? 
          aBook.googleBookDetails.volumeInfo.imageLinks.thumbnail ? aBook.googleBookDetails.volumeInfo.imageLinks.thumbnail.replace('http:', 'https:') : '' : ''),
        smallThumbnail: ((aBook.googleBookId && aBook.googleBookDetails) ? 
          aBook.googleBookDetails.volumeInfo.imageLinks.smallThumbnail ? aBook.googleBookDetails.volumeInfo.imageLinks.smallThumbnail.replace('http:', 'https:') : '' : '')
    };
  }).filter(s => (s.thumbnail !== ''));

  // Need a certain amount of slides available before "loop" mode will work - 10 is just a guess.
  const loopEnabled = (booksData.length >= 10);

  const swiperSlides = booksData.map((book, index: number) =>
    <SwiperSlide key={index} data-book-id={book.id}>
      <img src={book.thumbnail} loading="lazy" />
    </SwiperSlide>
  );

  const navigate = useNavigate();

  return (
    <>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 10,
          depth: 30,
          modifier: 1,
          slideShadows: false,
        }}
        onClick={(swiper) =>  navigate('book/' + swiper.slides[swiper.clickedIndex].dataset.bookId!)}
        navigation
        loop={loopEnabled}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperSlides}
      </Swiper>
      <p className="text-center">Books recently reviewed on {import.meta.env.VITE_APPLICATION_NAME} with a 'great' rating</p>
    </>
  );
}
