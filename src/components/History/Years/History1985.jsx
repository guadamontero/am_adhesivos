import React from "react";
import History from "../History";

import styles from "../history.module.css";
import image1985 from "../../../assets/1985.jpg";

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
            In id imperdiet lorem. <span>Praesent</span> ut.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            culpa dicta aliquid provident vitae facere fugiat temporibus
            consequuntur mollitia ullam iure nam placeat sapiente blanditiis
            libero animi laboriosam iste non veritatis totam laborum rerum!
            Harum itaque perspiciatis vero iusto quasi aut modi repudiandae,
            quia minima nihil voluptates quo ab, adipisci molestiae veniam,
            illum mollitia? Officiis fugiat id magnam nostrum veritatis culpa,
            expedita tenetur. Perspiciatis, sequi mollitia facere totam
            obcaecati minus accusantium rem maiores, pariatur voluptates ex
            quidem rerum cum at! Accusantium, vel! Reprehenderit aut ipsum vero
            doloribus ducimus obcaecati autem, exercitationem cumque quis velit
            porro unde quos nihil itaque cupiditate.
          </p>
        </div>
      </div>
      <History />
    </m.section>
  );
};

export default History1985;
