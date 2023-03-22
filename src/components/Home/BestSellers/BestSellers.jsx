import React from "react";
import Carousel from "./Carousel";

import styles from "./bestSellers.module.css";

const BestSellers = () => {
  
  return (
    <section className={styles.bestSellers}>
      <p className={styles.title}>
        Nuestros productos <span>más vendidos</span>
      </p>
      <div className={styles.products}>
        <Carousel />
      </div>
    </section>
  );
};

export default BestSellers;
