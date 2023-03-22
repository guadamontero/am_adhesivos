import React from "react";
import History from "../History";

import styles from "../history.module.css";
import image1985 from "../../../assets/Abuelo.jpg";

import { motion as m } from "framer-motion";

const History1985 = () => {
  return (
    <m.section
      className={styles.historyYear}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className={styles.descriptionYears}>
        <img src={image1985} alt="1985" />
        <div className={styles.text}>
          <h2>
            Los comienzos de <span>AM Adhesivos</span>
          </h2>
          <p>
          Nuestra historia empezó allá por la década del 80, cuando Horacio Montero Padre junto a la firma Química Madepa, Refinerias de Maíz y JC Tudela empezaron a comercializar todos sus adhesivos vinilicos, hotmelt, etc. Desde entonces nos ha dejado el legado de seguir atendiendo a la industra tal como el lo hizo durante muchos años como gerente de Refinerías de Maíz.
          Luego Horacio Montero Padre se jubila de Refinerías de Maíz y se dedica a la representación y distribución de los adhesivos que comerzalizan las empresas mencionadas.
          </p>
        </div>
      </div>
      <History />
    </m.section>
  );
};

export default History1985;
