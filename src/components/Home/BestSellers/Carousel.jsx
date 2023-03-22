import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '../../Global/Icon';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

const images = [
  { id: 1, url: 'https://example.com/image1.jpg' },
  { id: 2, url: 'https://example.com/image2.jpg' },
  { id: 3, url: 'https://example.com/image3.jpg' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: true,
  prevArrow: <Icon icon={faChevronCircleLeft} />,
  nextArrow: <Icon icon={faChevronCircleRight} />,
};


const Carousel = () => {
  return (
    <Slider {...settings} className="carousel">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt="" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
