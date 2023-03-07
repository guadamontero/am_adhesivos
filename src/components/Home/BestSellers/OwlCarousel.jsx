import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import img1 from '../../../assets/Adhesivo Acuoso.png';
import img2 from '../../../assets/Cola Fria.png';
import img3 from '../../../assets/Sellante Acrilicos.png';
import img4 from '../../../assets/hotmelt.png';
import img5 from '../../../assets/pur31.png';

const OwlCarousel = () => {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  }, []);

  return (
    <div className="owl-carousel">
      <div><img src={img1} alt="Imagen 1" /></div>
      <div><img src={img2} alt="Imagen 2" /></div>
      <div><img src={img3} alt="Imagen 3" /></div>
      <div><img src={img4} alt="Imagen 4" /></div>
      <div><img src={img5} alt="Imagen 5" /></div>
    </div>
  );
};

export default OwlCarousel;
