import React from "react";
import History from "../History";
import styles from "../history.module.css";
import image2020 from "../../../assets/covid19.jpg";

import { motion as m } from "framer-motion";

const History2020 = () => {
  return (
    <section className={styles.historyYear}>
      <m.div
        className={styles.descriptionYears}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img src={image2020} alt="2020" />
        <div className={styles.text}>
          <h2>
            Llegó la <span>pandemia</span>
          </h2>
          <p>
            Se vivió un año de recesión, trabajamos como proovedores indispensables ya que comerzalizamos para la industria alimenticia. Dado a la pandemia bajaron las ventas pero igualmente salimos adelante junto con los clientes.
          </p>
        </div>
      </m.div>
      <History />
    </section>
  );
};

export default History2020;
