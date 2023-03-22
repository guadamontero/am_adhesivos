import React from "react";
import History from "../History";
import styles from "../history.module.css";
import image2013 from "../../../assets/cantos-de-pvc.jpg";

import { motion as m } from "framer-motion";

const History2013 = () => {
  return (
    <section className={styles.historyYear}>
      <m.div
        className={styles.descriptionYears}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img src={image2013} alt="2013" />
        <div className={styles.text}>
          <h2>
            Sumamos herrajes y cantos <span>Greenway</span>
          </h2>
          <p>
            En el año 2005 surge una oportunidad de negocio y pudimos empezar a trabajar con GreenWay, distribuyendo herrajes y cantos de pvc.
          </p>
        </div>
      </m.div>
      <History />
    </section>
  );
};

export default History2013;
