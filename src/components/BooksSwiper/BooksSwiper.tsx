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
        thumbnail: (aBook.googleBookId ? 
          aBook.googleBookDetails.volumeInfo.imageLinks.thumbnail ? aBook.googleBookDetails.volumeInfo.imageLinks.thumbnail.replace('http:', 'https:') : '' : ''),
        smallThumbnail: (aBook.googleBookId ? 
          aBook.googleBookDetails.volumeInfo.imageLinks.smallThumbnail ? aBook.googleBookDetails.volumeInfo.imageLinks.smallThumbnail.replace('http:', 'https:') : '' : '')
    };
  }).filter(s => (s.thumbnail !== '#')).slice(0, 15);

  const swiperSlides = booksData.map((book, index: number) =>
    <SwiperSlide key={index} data-book-id={book.id}>
      <img src={book.thumbnail} />
    </SwiperSlide>
  );

  const navigate = useNavigate();

  return (
    <>
      <h2 className="home-intro text-center">Recently reviewed books on The Cloudy Book Club with a 'Great' review rating</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 30,
          depth: 20,
          modifier: 1,
          slideShadows: false,
        }}
        onClick={(swiper) =>  navigate('book/' + swiper.slides[swiper.clickedIndex].dataset.bookId!)}
        navigation
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperSlides}
      </Swiper>
    </>
  );
}
