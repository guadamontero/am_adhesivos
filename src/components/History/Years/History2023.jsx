import React from "react";
import History from "../History";
import styles from "../history.module.css";
import socios from "../../../assets/actualidad.jpg";

import { motion as m } from "framer-motion";

const History2023 = () => {
  return (
    <section className={styles.historyYear}>
      <m.div
        className={styles.descriptionYears}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <img src={socios} alt="socios" />
        <div className={styles.text}>
          <h2>
            <span>Hoy</span> en día
          </h2>
          <p>
            Luego de la pandemia Artecola renueva su imagen y además empieza a
            cambiar sus líneas y marcas por Afix, llevando a esta nueva marca a
            empezar a hacerse un lugar en los mercados de construcción y de las
            góndolas directas para tener productos de excelente performance.
            Esto impulso las ventas y crecimiento de AM Adhesivos.
            <br />
            Seguimos creciendo juntos y dando soluciones a las nuevas
            necesidades de nuestros clientes.
          </p>
        </div>
      </m.div>
      <History />
    </section>
  );
};

export default History2023;
