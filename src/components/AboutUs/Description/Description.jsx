import React from "react";
import styles from "./description.module.css";
import socios from "../../../assets/socios.jpg";

const Description = () => {
  return (
    <div className={styles.container}>
      <img src={socios} alt="socios" />
      <div className={styles.textContainer}>
        <div className={styles.textTitle}>
          <h3 className={styles.title}>AM ADHESIVOS</h3>
        </div>
        <div className={styles.textContent}>
          <p>
            Somos dos hermanos, hijos de Horacio Montero que juntos creamos AM Adhesivos. 
            <br />
            Damos soluciones a todos sus pegados, ofreciendo servicios de asesoramiento, distribución, pruebas de pegados, entre otros.
            <br />
            Llevamos soluciones rápidas y favorables para aumentar la productivdad de tu empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
