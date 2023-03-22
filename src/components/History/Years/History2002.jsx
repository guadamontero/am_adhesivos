import React from "react";
import History from "../History";
import styles from "../history.module.css";
import image2002 from "../../../assets/crisis2001.jpg";

import { motion as m } from "framer-motion";

const History2002 = () => {
  return (
    <section className={styles.historyYear}>
      <m.div
        className={styles.descriptionYears}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img src={image2002} alt="2002" />
        <div className={styles.text}>
          <h2>
          Superando la <span>crisis</span>
          </h2>
          <p>
            Superando la crisis del 2001 empezamos a ganar mercados con adhesivos de Artecola tanto para la industria de papel, cerrado de cajas, armado de bolsas, siempre acompañando el crecimiento de los clientes y cambiando a medida de que la tecnología lo vaya requiriendo.
          </p>
        </div>
      </m.div>
      <History />
    </section>
  );
};

export default History2002;
