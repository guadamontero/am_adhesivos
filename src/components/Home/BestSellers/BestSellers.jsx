import React from "react";
import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import styles from "./bestSellers.module.css";
import OwlCarousel from "./OwlCarousel";

const BestSellers = () => {
  
  return (
    <section className={styles.bestSellers}>
      <p className={styles.title}>
        Nuestros productos <span>más vendidos</span>
      </p>
      <div className={styles.products}>
        <OwlCarousel />
      </div>
    </section>
  );
};

export default BestSellers;
