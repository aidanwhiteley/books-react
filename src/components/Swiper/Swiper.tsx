import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// For testing only
import data from "./testdata.json";

export default function App() {

  const booksData = data.content.map(aBook => {
    return {
        title: aBook.title,
        author: aBook.author,
        rating: aBook.rating,
        bookAppUrl: '//cloudybookclub.com/#/book/' + aBook.id,
        thumbnail: (aBook.googleBookId ? aBook.googleBookDetails.volumeInfo.imageLinks.thumbnail.replace('http:', 'https:') : '#'),
        smallThumbnail: (aBook.googleBookId ? aBook.googleBookDetails.volumeInfo.imageLinks.smallThumbnail.replace('http:', 'https:') : '#')
    };
  }).filter(s => (s.thumbnail !== '#')).slice(0, 15);

  const swiperSlides = booksData.map((book, index) =>
    <SwiperSlide key={index} data-book-url={book.bookAppUrl}>
      <img src={book.thumbnail} />
    </SwiperSlide>
  );

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 20,
          depth: 20,
          modifier: 1,
          slideShadows: false,
        }}
        onClick={(swiper) =>  window.location.href = swiper.slides[swiper.clickedIndex].dataset.bookUrl!}
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
