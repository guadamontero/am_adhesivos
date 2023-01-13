import React, { useEffect } from "react";

import Services from "./Services/Services";
import BestSellers from "./BestSellers/BestSellers";

import { motion as m } from "framer-motion";

import heroe from "../../assets/heroe.jpg";
import styles from "./home.module.css";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <m.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className={styles.heroe}>
        <img src={heroe} alt="imagen" />
      </div>
      <div>
        <div className={styles.title}>
          <p>
            El futuro del <span>adhesivo</span> en un solo lugar
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>Te invitamos a conocer todos nuestros productos y más</p>
        </div>
      </div>
      <Services />
      <BestSellers />
      <WhyUs />
    </m.main>
  );
};

export default Home;
