import React from "react";

import Icon from "../../Global/Icon";
import {
  faSquarePollVertical,
  faBolt,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHeart,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./values.module.css";

const Values = () => {
  return (
    <section className={styles.values}>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faSquarePollVertical} />
        <h4>Resultados</h4>
        <p>Compromiso para la perpetuidad.</p>
      </div>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faUser} />
        <h4>Clientes</h4>
        <p>Prioridad y compromiso con su negocio.</p>
      </div>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faHeart} />
        <h4>Integridad</h4>
        <p>Transparencia y coherencia en las actitudes.</p>
      </div>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faBolt} />
        <h4>Innovación</h4>
        <p>Diferenciación en las soluciones ofrecidas.</p>
      </div>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faRecycle} />
        <h4>Sustentabilidad</h4>
        <p>Económica, social y ambiental.</p>
      </div>
      <div className={styles.valueCard}>
        <Icon css={styles.iconValue} icon={faCircleCheck} />
        <h4>Simplicidad</h4>
        <p>Servir y actuar de forma descomplicada.</p>
      </div>
    </section>
  );
};

export default Values;
