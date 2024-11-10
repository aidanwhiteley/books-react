import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BooksSwiper.css';

import { BooksProps } from "./BooksSwiperRoute";

// For testing only
// import data from "./testdata.json";

export default function BookSwiper(props: BooksProps) {

  const [radioValue, setRadioValue] = useState('great');

  const navigate = useNavigate();

  if (props.rating !== radioValue) {
    setRadioValue(props.rating);
  }

  const handleBookRatingChange = (rating: string) => {
    setRadioValue(rating);
    navigate('/?rating=' + rating);
  }

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

  
  const ratingText = (radioValue === 'ok') ? 'an OK' : 'a ' + radioValue;
  const showNaviagtion = window.innerWidth > 1023;

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
        onClick={(swiper) => navigate('book/' + swiper.slides[swiper.clickedIndex].dataset.bookId!)}
        navigation={showNaviagtion}
        loop={loopEnabled}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperSlides}
      </Swiper>
      <p className="text-center">Books recently reviewed on {import.meta.env.VITE_APPLICATION_NAME} with {ratingText} rating</p>

      <div id="rating-selection" className="text-center">
        <ButtonGroup>

          <ToggleButton key={1} id="radio-great" type="radio" variant="outline-primary" name="radio-great"
            value="great" checked={radioValue === "great"} onChange={(e) => handleBookRatingChange(e.currentTarget.value)}>
            Great books
          </ToggleButton>

          <ToggleButton key={2} id="radio-good" type="radio" variant="outline-primary" name="radio-good"
            value="good" checked={radioValue === "good"} onChange={(e) => handleBookRatingChange(e.currentTarget.value)}>
            Good books
          </ToggleButton>

          <ToggleButton key={3} id="radio-ok" type="radio" variant="outline-primary" name="radio-ok"
            value="ok" checked={radioValue === "ok"} onChange={(e) => handleBookRatingChange(e.currentTarget.value)}>
            OK books
          </ToggleButton>

        </ButtonGroup>
      </div>
    </>
  );
}
