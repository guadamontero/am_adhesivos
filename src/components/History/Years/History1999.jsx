import React from "react";
import History from "../History";
import styles from "../history.module.css";
import image1999 from "../../../assets/logo.png";

import { motion as m } from "framer-motion";

const History1999 = () => {
  return (
    <section className={styles.historyYear}>
      <m.div
        className={styles.descriptionYears}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img src={image1999} alt="1999" />
        <div className={styles.text}>
          <h2>
            <span>Fundación</span> de la empresa
          </h2>
          <p>
            En el año 1999 creamos la Sociedad de Hecho Horacio Montero (H) y María Irene Montero. A partir de ese año somos representantes de Artecola Argentina y paralelamente distribuimos productos que suelen ir anexados a los distintos mercados.
          </p>
        </div>
      </m.div>
      <History />
    </section>
  );
};

export default History1999;
